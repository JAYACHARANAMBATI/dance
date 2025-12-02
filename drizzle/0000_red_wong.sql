CREATE TABLE `event_submissions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`event_type` text NOT NULL,
	`attendees` text NOT NULL,
	`event_date` text NOT NULL,
	`budget` text,
	`message` text NOT NULL,
	`created_at` text NOT NULL
);
