/*
Navicat MySQL Data Transfer

Source Server         : MZ
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : pikapika

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2015-03-02 16:58:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  `amount` int(11) DEFAULT '0',
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '娱乐', '0');
INSERT INTO `category` VALUES ('2', '动画', '0');
INSERT INTO `category` VALUES ('3', '科技', '0');
INSERT INTO `category` VALUES ('4', '其它', '0');
