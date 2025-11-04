CREATE TABLE `company` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`address` text NOT NULL,
	`website` text NOT NULL,
	`logo` text NOT NULL,
	`founded` integer NOT NULL,
	`employees` integer NOT NULL,
	`vision` text NOT NULL,
	`mission` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `gallery` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`image` text NOT NULL,
	`category` text NOT NULL,
	`alt` text NOT NULL,
	`date` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `homepage_company_profile` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`stats` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `homepage_cta` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`primary_button_text` text NOT NULL,
	`primary_button_href` text NOT NULL,
	`secondary_button_text` text NOT NULL,
	`secondary_button_href` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `homepage_hero` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`cta_text` text NOT NULL,
	`cta_href` text NOT NULL,
	`secondary_cta_text` text NOT NULL,
	`secondary_cta_href` text NOT NULL,
	`background_video` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `homepage_why_choose_us` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`icon` text NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `job_vacancies` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`location` text NOT NULL,
	`type` text NOT NULL,
	`salary` text NOT NULL,
	`duration` text NOT NULL,
	`requirements` text NOT NULL,
	`benefits` text NOT NULL,
	`qualifications` text NOT NULL,
	`featured` integer NOT NULL,
	`country` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `news` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`author` text NOT NULL,
	`date` text NOT NULL,
	`image` text NOT NULL,
	`category` text NOT NULL,
	`tags` text NOT NULL,
	`slug` text NOT NULL,
	`reading_time_text` text NOT NULL,
	`reading_time_minutes` integer NOT NULL,
	`reading_time_ms` integer NOT NULL,
	`reading_time_words` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `organizational_structure` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`position` text NOT NULL,
	`photo` text NOT NULL,
	`level` integer NOT NULL,
	`icon` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `partners` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`logo` text NOT NULL,
	`website` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `service_additional_services` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`features` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `service_faq` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`question` text NOT NULL,
	`answer` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `service_process_steps` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`number` text NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`icon` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `service_qualifications` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`type` text NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `services` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`icon` text NOT NULL,
	`features` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `social_media` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`platform` text NOT NULL,
	`url` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `testimonials` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`position` text NOT NULL,
	`company` text NOT NULL,
	`image` text NOT NULL,
	`content` text NOT NULL,
	`rating` integer NOT NULL,
	`contract_duration` text NOT NULL,
	`ship_type` text NOT NULL
);
