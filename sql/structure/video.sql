/*
Navicat MySQL Data Transfer

Source Server         : MZ
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : pikapika

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2015-03-02 16:59:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for video
-- ----------------------------
DROP TABLE IF EXISTS `video`;
CREATE TABLE `video` (
  `video_id` int(11) NOT NULL AUTO_INCREMENT,
  `uploader` int(11) NOT NULL,
  `author` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `src` varchar(255) NOT NULL,
  `upload_time` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `clicked` int(11) DEFAULT '0',
  `greated` int(11) DEFAULT '0',
  `collected` int(11) DEFAULT '0',
  `commented` int(11) DEFAULT '0',
  `marquee` int(11) DEFAULT '0',
  PRIMARY KEY (`video_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
