import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { savePropertyEvaluation } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Property Evaluation Router
  evaluation: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1, "El nombre es requerido"),
        phone: z.string().min(1, "El teléfono es requerido"),
        email: z.string().email("Email inválido"),
        propertyType: z.string().min(1, "El tipo de propiedad es requerido"),
        location: z.string().min(1, "La ubicación es requerida"),
        message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
      }))
      .mutation(async ({ input }) => {
        try {
          // Guardar en la base de datos
          await savePropertyEvaluation({
            name: input.name,
            phone: input.phone,
            email: input.email,
            propertyType: input.propertyType,
            location: input.location,
            message: input.message,
            status: "pending",
          });

          // Enviar notificación al propietario
          await notifyOwner({
            title: "Nueva Solicitud de Evaluación",
            content: `Nueva solicitud de evaluación de ${input.name}:\n\nTeléfono: ${input.phone}\nEmail: ${input.email}\nTipo de Propiedad: ${input.propertyType}\nUbicación: ${input.location}\n\nMensaje:\n${input.message}`,
          });

          return {
            success: true,
            message: "Solicitud enviada exitosamente. Nos contactaremos pronto.",
          };
        } catch (error) {
          console.error("Error al procesar solicitud de evaluación:", error);
          throw new Error("Error al procesar la solicitud. Por favor intenta de nuevo.");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
