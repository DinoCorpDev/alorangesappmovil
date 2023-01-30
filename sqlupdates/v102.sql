ALTER TABLE `products` ADD `reference` TEXT NULL AFTER `shop_id`;
ALTER TABLE `products` ADD `currency` TEXT NULL AFTER `discount_end_date`;
ALTER TABLE `products` ADD `warranty_text` TEXT NULL AFTER `has_warranty`;
ALTER TABLE `products` ADD `shipping` TEXT NULL AFTER `num_of_sale`;
ALTER TABLE `products` ADD `intake` TEXT NULL AFTER `shipping`;
ALTER TABLE `products` ADD `material` TEXT NULL AFTER `intake`;
ALTER TABLE `products` ADD `unit_metering` TEXT NULL AFTER `material`;
ALTER TABLE `products` ADD `engaste` TEXT NULL AFTER `unit_metering`;