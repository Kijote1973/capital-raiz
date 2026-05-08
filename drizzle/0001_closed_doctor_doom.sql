CREATE TABLE `propertyEvaluations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`phone` varchar(20) NOT NULL,
	`email` varchar(320) NOT NULL,
	`propertyType` varchar(255) NOT NULL,
	`location` varchar(255) NOT NULL,
	`message` text NOT NULL,
	`status` enum('pending','contacted','evaluated','rejected') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `propertyEvaluations_id` PRIMARY KEY(`id`)
);
