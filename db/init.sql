CREATE TABLE IF NOT EXISTS `countries` (
	`id` integer primary key NOT NULL UNIQUE,
	`code` VARCHAR(2),
	`country_name` VARCHAR(56),
	`emoji` VARCHAR(56)
);

insert into `countries` (id, code, country, emoji) values (1, 'FR', 'France', 'U+1F1EB U+1F1F7');
insert into `countries` (id, code, country, emoji) values (2, 'BE', 'Belgique', 'U+1F1E7 U+1F1EA');
insert into `countries` (id, code, country, emoji) values (3, 'AD', 'Andorre', 'U+1F3F4 U+E0061 U+E0064 U+E0030 U+E0037 U+E007F');
