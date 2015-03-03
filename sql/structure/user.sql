/*
Navicat MySQL Data Transfer

Source Server         : MZ
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : pikapika

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2015-03-02 16:59:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `telnum` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `signature` varchar(255) DEFAULT NULL,
  `face` varchar(255) DEFAULT NULL,
  `submit` int(11) DEFAULT '0',
  `collect` int(11) DEFAULT '0',
  `level` int(11) DEFAULT '1',
  `score` int(11) DEFAULT '0',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
