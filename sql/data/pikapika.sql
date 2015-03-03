/*
Navicat MySQL Data Transfer

Source Server         : MZ
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : pikapika

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2015-03-03 22:37:50
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
INSERT INTO `category` VALUES ('1', '娱乐', '5');
INSERT INTO `category` VALUES ('2', '动画', '5');
INSERT INTO `category` VALUES ('3', '科技', '5');
INSERT INTO `category` VALUES ('4', '其它', '5');

-- ----------------------------
-- Table structure for collection_1
-- ----------------------------
DROP TABLE IF EXISTS `collection_1`;
CREATE TABLE `collection_1` (
  `video_id` int(11) NOT NULL,
  `collect_time` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of collection_1
-- ----------------------------
INSERT INTO `collection_1` VALUES ('6', '1425390867');

-- ----------------------------
-- Table structure for comment_1
-- ----------------------------
DROP TABLE IF EXISTS `comment_1`;
CREATE TABLE `comment_1` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `commenter` int(11) NOT NULL,
  `comment_msg` varchar(255) NOT NULL,
  `publish_time` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment_1
-- ----------------------------

-- ----------------------------
-- Table structure for comment_10
-- ----------------------------
DROP TABLE IF EXISTS `comment_10`;
CREATE TABLE `comment_10` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `commenter` int(11) NOT NULL,
  `comment_msg` varchar(255) NOT NULL,
  `publish_time` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment_10
-- ----------------------------

-- ----------------------------
-- Table structure for comment_11
-- ----------------------------
DROP TABLE IF EXISTS `comment_11`;
CREATE TABLE `comment_11` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `commenter` int(11) NOT NULL,
  `comment_msg` varchar(255) NOT NULL,
  `publish_time` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment_11
-- ----------------------------

-- ----------------------------
-- Table structure for comment_12
-- ----------------------------
DROP TABLE IF EXISTS `comment_12`;
CREATE TABLE `comment_12` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `commenter` int(11) NOT NULL,
  `comment_msg` varchar(255) NOT NULL,
  `publish_time` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment_12
-- ----------------------------

-- ----------------------------
-- Table structure for comment_13
-- ----------------------------
DROP TABLE IF EXISTS `comment_13`;
CREATE TABLE `comment_13` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `commenter` int(11) NOT NULL,
  `comment_msg` varchar(255) NOT NULL,
  `publish_time` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment_13
-- ----------------------------

-- ----------------------------
-- Table structure for comment_14
-- ----------------------------
DROP TABLE IF EXISTS `comment_14`;
CREATE TABLE `comment_14` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `commenter` int(11) NOT NULL,
  `comment_msg` varchar(255) NOT NULL,
  `publish_time` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment_14
-- ----------------------------

-- ----------------------------
-- Table structure for comment_15
-- ----------------------------
DROP TABLE IF EXISTS `comment_15`;
CREATE TABLE `comment_15` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `commenter` int(11) NOT NULL,
  `comment_msg` varchar(255) NOT NULL,
  `publish_time` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment_15
-- ----------------------------

-- ----------------------------
-- Table structure for comment_16
-- ----------------------------
DROP TABLE IF EXISTS `comment_16`;
CREATE TABLE `comment_16` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `commenter` int(11) NOT NULL,
  `comment_msg` varchar(255) NOT NULL,
  `publish_time` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment_16
-- ----------------------------

-- ----------------------------
-- Table structure for comment_17
-- ----------------------------
DROP TABLE IF EXISTS `comment_17`;
CREATE TABLE `comment_17` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `commenter` int(11) NOT NULL,
  `comment_msg` varchar(255) NOT NULL,
  `publish_time` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment_17
-- ----------------------------

-- ----------------------------
-- Table structure for comment_18
-- ----------------------------
DROP TABLE IF EXISTS `comment_18`;
CREATE TABLE `comment_18` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `commenter` int(11) NOT NULL,
  `comment_msg` varchar(255) NOT NULL,
  `publish_time` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment_18
-- ----------------------------

-- ----------------------------
-- Table structure for comment_19
-- ----------------------------
DROP TABLE IF EXISTS `comment_19`;
CREATE TABLE `comment_19` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `commenter` int(11) NOT NULL,
  `comment_msg` varchar(255) NOT NULL,
  `publish_time` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment_19
-- ----------------------------

-- ----------------------------
-- Table structure for comment_2
-- ----------------------------
DROP TABLE IF EXISTS `comment_2`;
CREATE TABLE `comment_2` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `commenter` int(11) NOT NULL,
  `comment_msg` varchar(255) NOT NULL,
  `publish_time` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment_2
-- ----------------------------

-- ----------------------------
-- Table structure for comment_20
-- ----------------------------
DROP TABLE IF EXISTS `comment_20`;
CREATE TABLE `comment_20` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `commenter` int(11) NOT NULL,
  `comment_msg` varchar(255) NOT NULL,
  `publish_time` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment_20
-- ----------------------------

-- ----------------------------
-- Table structure for comment_3
-- ----------------------------
DROP TABLE IF EXISTS `comment_3`;
CREATE TABLE `comment_3` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `commenter` int(11) NOT NULL,
  `comment_msg` varchar(255) NOT NULL,
  `publish_time` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment_3
-- ----------------------------

-- ----------------------------
-- Table structure for comment_4
-- ----------------------------
DROP TABLE IF EXISTS `comment_4`;
CREATE TABLE `comment_4` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `commenter` int(11) NOT NULL,
  `comment_msg` varchar(255) NOT NULL,
  `publish_time` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment_4
-- ----------------------------

-- ----------------------------
-- Table structure for comment_5
-- ----------------------------
DROP TABLE IF EXISTS `comment_5`;
CREATE TABLE `comment_5` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `commenter` int(11) NOT NULL,
  `comment_msg` varchar(255) NOT NULL,
  `publish_time` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment_5
-- ----------------------------

-- ----------------------------
-- Table structure for comment_6
-- ----------------------------
DROP TABLE IF EXISTS `comment_6`;
CREATE TABLE `comment_6` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `commenter` int(11) NOT NULL,
  `comment_msg` varchar(255) NOT NULL,
  `publish_time` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment_6
-- ----------------------------

-- ----------------------------
-- Table structure for comment_7
-- ----------------------------
DROP TABLE IF EXISTS `comment_7`;
CREATE TABLE `comment_7` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `commenter` int(11) NOT NULL,
  `comment_msg` varchar(255) NOT NULL,
  `publish_time` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment_7
-- ----------------------------

-- ----------------------------
-- Table structure for comment_8
-- ----------------------------
DROP TABLE IF EXISTS `comment_8`;
CREATE TABLE `comment_8` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `commenter` int(11) NOT NULL,
  `comment_msg` varchar(255) NOT NULL,
  `publish_time` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment_8
-- ----------------------------

-- ----------------------------
-- Table structure for comment_9
-- ----------------------------
DROP TABLE IF EXISTS `comment_9`;
CREATE TABLE `comment_9` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `commenter` int(11) NOT NULL,
  `comment_msg` varchar(255) NOT NULL,
  `publish_time` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment_9
-- ----------------------------

-- ----------------------------
-- Table structure for great_1
-- ----------------------------
DROP TABLE IF EXISTS `great_1`;
CREATE TABLE `great_1` (
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of great_1
-- ----------------------------

-- ----------------------------
-- Table structure for great_10
-- ----------------------------
DROP TABLE IF EXISTS `great_10`;
CREATE TABLE `great_10` (
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of great_10
-- ----------------------------

-- ----------------------------
-- Table structure for great_11
-- ----------------------------
DROP TABLE IF EXISTS `great_11`;
CREATE TABLE `great_11` (
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of great_11
-- ----------------------------

-- ----------------------------
-- Table structure for great_12
-- ----------------------------
DROP TABLE IF EXISTS `great_12`;
CREATE TABLE `great_12` (
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of great_12
-- ----------------------------

-- ----------------------------
-- Table structure for great_13
-- ----------------------------
DROP TABLE IF EXISTS `great_13`;
CREATE TABLE `great_13` (
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of great_13
-- ----------------------------

-- ----------------------------
-- Table structure for great_14
-- ----------------------------
DROP TABLE IF EXISTS `great_14`;
CREATE TABLE `great_14` (
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of great_14
-- ----------------------------

-- ----------------------------
-- Table structure for great_15
-- ----------------------------
DROP TABLE IF EXISTS `great_15`;
CREATE TABLE `great_15` (
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of great_15
-- ----------------------------

-- ----------------------------
-- Table structure for great_16
-- ----------------------------
DROP TABLE IF EXISTS `great_16`;
CREATE TABLE `great_16` (
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of great_16
-- ----------------------------

-- ----------------------------
-- Table structure for great_17
-- ----------------------------
DROP TABLE IF EXISTS `great_17`;
CREATE TABLE `great_17` (
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of great_17
-- ----------------------------

-- ----------------------------
-- Table structure for great_18
-- ----------------------------
DROP TABLE IF EXISTS `great_18`;
CREATE TABLE `great_18` (
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of great_18
-- ----------------------------

-- ----------------------------
-- Table structure for great_19
-- ----------------------------
DROP TABLE IF EXISTS `great_19`;
CREATE TABLE `great_19` (
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of great_19
-- ----------------------------

-- ----------------------------
-- Table structure for great_2
-- ----------------------------
DROP TABLE IF EXISTS `great_2`;
CREATE TABLE `great_2` (
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of great_2
-- ----------------------------

-- ----------------------------
-- Table structure for great_20
-- ----------------------------
DROP TABLE IF EXISTS `great_20`;
CREATE TABLE `great_20` (
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of great_20
-- ----------------------------

-- ----------------------------
-- Table structure for great_3
-- ----------------------------
DROP TABLE IF EXISTS `great_3`;
CREATE TABLE `great_3` (
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of great_3
-- ----------------------------

-- ----------------------------
-- Table structure for great_4
-- ----------------------------
DROP TABLE IF EXISTS `great_4`;
CREATE TABLE `great_4` (
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of great_4
-- ----------------------------

-- ----------------------------
-- Table structure for great_5
-- ----------------------------
DROP TABLE IF EXISTS `great_5`;
CREATE TABLE `great_5` (
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of great_5
-- ----------------------------

-- ----------------------------
-- Table structure for great_6
-- ----------------------------
DROP TABLE IF EXISTS `great_6`;
CREATE TABLE `great_6` (
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of great_6
-- ----------------------------
INSERT INTO `great_6` VALUES ('1');

-- ----------------------------
-- Table structure for great_7
-- ----------------------------
DROP TABLE IF EXISTS `great_7`;
CREATE TABLE `great_7` (
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of great_7
-- ----------------------------
INSERT INTO `great_7` VALUES ('1');

-- ----------------------------
-- Table structure for great_8
-- ----------------------------
DROP TABLE IF EXISTS `great_8`;
CREATE TABLE `great_8` (
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of great_8
-- ----------------------------

-- ----------------------------
-- Table structure for great_9
-- ----------------------------
DROP TABLE IF EXISTS `great_9`;
CREATE TABLE `great_9` (
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of great_9
-- ----------------------------

-- ----------------------------
-- Table structure for history_1
-- ----------------------------
DROP TABLE IF EXISTS `history_1`;
CREATE TABLE `history_1` (
  `video_id` int(11) NOT NULL,
  `last_play` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of history_1
-- ----------------------------
INSERT INTO `history_1` VALUES ('6', '1425390864');
INSERT INTO `history_1` VALUES ('7', '1425391010');
INSERT INTO `history_1` VALUES ('5', '1425391027');
INSERT INTO `history_1` VALUES ('4', '1425391033');
INSERT INTO `history_1` VALUES ('13', '1425393415');

-- ----------------------------
-- Table structure for marquee_1
-- ----------------------------
DROP TABLE IF EXISTS `marquee_1`;
CREATE TABLE `marquee_1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of marquee_1
-- ----------------------------

-- ----------------------------
-- Table structure for marquee_10
-- ----------------------------
DROP TABLE IF EXISTS `marquee_10`;
CREATE TABLE `marquee_10` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of marquee_10
-- ----------------------------

-- ----------------------------
-- Table structure for marquee_11
-- ----------------------------
DROP TABLE IF EXISTS `marquee_11`;
CREATE TABLE `marquee_11` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of marquee_11
-- ----------------------------

-- ----------------------------
-- Table structure for marquee_12
-- ----------------------------
DROP TABLE IF EXISTS `marquee_12`;
CREATE TABLE `marquee_12` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of marquee_12
-- ----------------------------

-- ----------------------------
-- Table structure for marquee_13
-- ----------------------------
DROP TABLE IF EXISTS `marquee_13`;
CREATE TABLE `marquee_13` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of marquee_13
-- ----------------------------
INSERT INTO `marquee_13` VALUES ('1', '0', '444', '1', '2', '15');

-- ----------------------------
-- Table structure for marquee_14
-- ----------------------------
DROP TABLE IF EXISTS `marquee_14`;
CREATE TABLE `marquee_14` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of marquee_14
-- ----------------------------

-- ----------------------------
-- Table structure for marquee_15
-- ----------------------------
DROP TABLE IF EXISTS `marquee_15`;
CREATE TABLE `marquee_15` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of marquee_15
-- ----------------------------

-- ----------------------------
-- Table structure for marquee_16
-- ----------------------------
DROP TABLE IF EXISTS `marquee_16`;
CREATE TABLE `marquee_16` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of marquee_16
-- ----------------------------

-- ----------------------------
-- Table structure for marquee_17
-- ----------------------------
DROP TABLE IF EXISTS `marquee_17`;
CREATE TABLE `marquee_17` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of marquee_17
-- ----------------------------

-- ----------------------------
-- Table structure for marquee_18
-- ----------------------------
DROP TABLE IF EXISTS `marquee_18`;
CREATE TABLE `marquee_18` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of marquee_18
-- ----------------------------

-- ----------------------------
-- Table structure for marquee_19
-- ----------------------------
DROP TABLE IF EXISTS `marquee_19`;
CREATE TABLE `marquee_19` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of marquee_19
-- ----------------------------

-- ----------------------------
-- Table structure for marquee_2
-- ----------------------------
DROP TABLE IF EXISTS `marquee_2`;
CREATE TABLE `marquee_2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of marquee_2
-- ----------------------------

-- ----------------------------
-- Table structure for marquee_20
-- ----------------------------
DROP TABLE IF EXISTS `marquee_20`;
CREATE TABLE `marquee_20` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of marquee_20
-- ----------------------------

-- ----------------------------
-- Table structure for marquee_3
-- ----------------------------
DROP TABLE IF EXISTS `marquee_3`;
CREATE TABLE `marquee_3` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of marquee_3
-- ----------------------------

-- ----------------------------
-- Table structure for marquee_4
-- ----------------------------
DROP TABLE IF EXISTS `marquee_4`;
CREATE TABLE `marquee_4` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of marquee_4
-- ----------------------------

-- ----------------------------
-- Table structure for marquee_5
-- ----------------------------
DROP TABLE IF EXISTS `marquee_5`;
CREATE TABLE `marquee_5` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of marquee_5
-- ----------------------------

-- ----------------------------
-- Table structure for marquee_6
-- ----------------------------
DROP TABLE IF EXISTS `marquee_6`;
CREATE TABLE `marquee_6` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of marquee_6
-- ----------------------------

-- ----------------------------
-- Table structure for marquee_7
-- ----------------------------
DROP TABLE IF EXISTS `marquee_7`;
CREATE TABLE `marquee_7` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of marquee_7
-- ----------------------------

-- ----------------------------
-- Table structure for marquee_8
-- ----------------------------
DROP TABLE IF EXISTS `marquee_8`;
CREATE TABLE `marquee_8` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of marquee_8
-- ----------------------------

-- ----------------------------
-- Table structure for marquee_9
-- ----------------------------
DROP TABLE IF EXISTS `marquee_9`;
CREATE TABLE `marquee_9` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `user` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of marquee_9
-- ----------------------------

-- ----------------------------
-- Table structure for reply_1
-- ----------------------------
DROP TABLE IF EXISTS `reply_1`;
CREATE TABLE `reply_1` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `reply_time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `replier` int(11) NOT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply_1
-- ----------------------------

-- ----------------------------
-- Table structure for reply_10
-- ----------------------------
DROP TABLE IF EXISTS `reply_10`;
CREATE TABLE `reply_10` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `reply_time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `replier` int(11) NOT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply_10
-- ----------------------------

-- ----------------------------
-- Table structure for reply_11
-- ----------------------------
DROP TABLE IF EXISTS `reply_11`;
CREATE TABLE `reply_11` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `reply_time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `replier` int(11) NOT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply_11
-- ----------------------------

-- ----------------------------
-- Table structure for reply_12
-- ----------------------------
DROP TABLE IF EXISTS `reply_12`;
CREATE TABLE `reply_12` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `reply_time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `replier` int(11) NOT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply_12
-- ----------------------------

-- ----------------------------
-- Table structure for reply_13
-- ----------------------------
DROP TABLE IF EXISTS `reply_13`;
CREATE TABLE `reply_13` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `reply_time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `replier` int(11) NOT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply_13
-- ----------------------------

-- ----------------------------
-- Table structure for reply_14
-- ----------------------------
DROP TABLE IF EXISTS `reply_14`;
CREATE TABLE `reply_14` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `reply_time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `replier` int(11) NOT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply_14
-- ----------------------------

-- ----------------------------
-- Table structure for reply_15
-- ----------------------------
DROP TABLE IF EXISTS `reply_15`;
CREATE TABLE `reply_15` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `reply_time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `replier` int(11) NOT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply_15
-- ----------------------------

-- ----------------------------
-- Table structure for reply_16
-- ----------------------------
DROP TABLE IF EXISTS `reply_16`;
CREATE TABLE `reply_16` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `reply_time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `replier` int(11) NOT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply_16
-- ----------------------------

-- ----------------------------
-- Table structure for reply_17
-- ----------------------------
DROP TABLE IF EXISTS `reply_17`;
CREATE TABLE `reply_17` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `reply_time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `replier` int(11) NOT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply_17
-- ----------------------------

-- ----------------------------
-- Table structure for reply_18
-- ----------------------------
DROP TABLE IF EXISTS `reply_18`;
CREATE TABLE `reply_18` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `reply_time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `replier` int(11) NOT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply_18
-- ----------------------------

-- ----------------------------
-- Table structure for reply_19
-- ----------------------------
DROP TABLE IF EXISTS `reply_19`;
CREATE TABLE `reply_19` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `reply_time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `replier` int(11) NOT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply_19
-- ----------------------------

-- ----------------------------
-- Table structure for reply_2
-- ----------------------------
DROP TABLE IF EXISTS `reply_2`;
CREATE TABLE `reply_2` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `reply_time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `replier` int(11) NOT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply_2
-- ----------------------------

-- ----------------------------
-- Table structure for reply_20
-- ----------------------------
DROP TABLE IF EXISTS `reply_20`;
CREATE TABLE `reply_20` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `reply_time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `replier` int(11) NOT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply_20
-- ----------------------------

-- ----------------------------
-- Table structure for reply_3
-- ----------------------------
DROP TABLE IF EXISTS `reply_3`;
CREATE TABLE `reply_3` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `reply_time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `replier` int(11) NOT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply_3
-- ----------------------------

-- ----------------------------
-- Table structure for reply_4
-- ----------------------------
DROP TABLE IF EXISTS `reply_4`;
CREATE TABLE `reply_4` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `reply_time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `replier` int(11) NOT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply_4
-- ----------------------------

-- ----------------------------
-- Table structure for reply_5
-- ----------------------------
DROP TABLE IF EXISTS `reply_5`;
CREATE TABLE `reply_5` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `reply_time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `replier` int(11) NOT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply_5
-- ----------------------------

-- ----------------------------
-- Table structure for reply_6
-- ----------------------------
DROP TABLE IF EXISTS `reply_6`;
CREATE TABLE `reply_6` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `reply_time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `replier` int(11) NOT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply_6
-- ----------------------------

-- ----------------------------
-- Table structure for reply_7
-- ----------------------------
DROP TABLE IF EXISTS `reply_7`;
CREATE TABLE `reply_7` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `reply_time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `replier` int(11) NOT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply_7
-- ----------------------------

-- ----------------------------
-- Table structure for reply_8
-- ----------------------------
DROP TABLE IF EXISTS `reply_8`;
CREATE TABLE `reply_8` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `reply_time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `replier` int(11) NOT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply_8
-- ----------------------------

-- ----------------------------
-- Table structure for reply_9
-- ----------------------------
DROP TABLE IF EXISTS `reply_9`;
CREATE TABLE `reply_9` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `reply_time` int(11) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `replier` int(11) NOT NULL,
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply_9
-- ----------------------------

-- ----------------------------
-- Table structure for sign_1
-- ----------------------------
DROP TABLE IF EXISTS `sign_1`;
CREATE TABLE `sign_1` (
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sign_1
-- ----------------------------
INSERT INTO `sign_1` VALUES ('2015-03-03 00:00:00');

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'MZ', 'MmU2YjQ1YTUyN2M3YTE3OGJlMzdlMjM5ZDlmMjJhMDg=', null, null, null, null, null, 'MTQyNTM5Mjg4NA==.jpeg', '20', '1', '2', '367');

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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of video
-- ----------------------------
INSERT INTO `video` VALUES ('1', '1', 'MZ', '迪亚鲁加vs帕鲁奇亚vs达库莱伊', '神奇宝贝', '2', '动画', '史诗之战', 'MTQyNTM5MDE1Nw==.jpg', 'MTQyNTM5MDE1Ng==.mp4', '1425390156', '1198636', '0', '0', '0', '0', '0');
INSERT INTO `video` VALUES ('2', '1', 'MZ', '小智终极阵容!', '神奇宝贝,小智', '2', '动画', '初代三主角+皮卡+卡比+乘龙，搭配雪山背景!!!', 'MTQyNTM5MDMyMw==.jpg', 'MTQyNTM5MDMyMg==.mp4', '1425390322', '1198636', '0', '0', '0', '0', '0');
INSERT INTO `video` VALUES ('3', '1', 'MZ', '伊布家庭', '神奇宝贝,伊布', '2', '动画', '各种萌萌哒伊布来啦！', 'MTQyNTM5MDUxMA==.jpg', 'MTQyNTM5MDUwOQ==.mp4', '1425390509', '3246238', '0', '0', '0', '0', '0');
INSERT INTO `video` VALUES ('4', '1', 'MZ', '【冥王龙】', '神奇宝贝', '2', '动画', '美美哒画面', 'MTQyNTM5MDYwMA==.jpg', 'MTQyNTM5MDU5OQ==.mp4', '1425390599', '1198636', '1', '0', '0', '0', '0');
INSERT INTO `video` VALUES ('5', '1', 'MZ', '【萌】各种萌物', '神奇宝贝', '2', '动画', '各种精灵啊，和谐的画面！', 'MTQyNTM5MDcwMA==.jpg', 'MTQyNTM5MDY5OQ==.mp4', '1425390699', '1198636', '1', '0', '0', '0', '0');
INSERT INTO `video` VALUES ('6', '1', 'MZ', '美丽圣诞夜', '神奇宝贝,圣诞', '4', '其它', '圣诞节到了，各种精灵们也又开始卖萌了哦！', 'MTQyNTM5MDg1Mg==.jpg', 'MTQyNTM5MDg1MQ==.mp4', '1425390851', '1198636', '1', '1', '1', '0', '0');
INSERT INTO `video` VALUES ('7', '1', 'MZ', '奇妙森林', '神奇宝贝,森林', '4', '其它', '快来看看森林里是什么样的景象吧', 'MTQyNTM5MDk5Nw==.jpg', 'MTQyNTM5MDk5Ng==.mp4', '1425390996', '3246238', '1', '1', '0', '0', '0');
INSERT INTO `video` VALUES ('8', '1', 'MZ', '【鬼畜】皮卡丘吓哭波克比', '卖萌', '4', '其它', '我们的小皮卡又在卖萌了，快来看可怜的波克比被吓成啥样了吧！', 'MTQyNTM5MTI4MQ==.jpg', 'MTQyNTM5MTI4MA==.mp4', '1425391280', '1198636', '0', '0', '0', '0', '0');
INSERT INTO `video` VALUES ('9', '1', 'MZ', '《阿尔宙斯 超克的时空》', '神兽', '4', '其它', '创世神终于出现啦，画面太美我不敢看= =', 'MTQyNTM5MTU5OQ==.jpg', 'MTQyNTM5MTU5OA==.mp4', '1425391598', '3246238', '0', '0', '0', '0', '0');
INSERT INTO `video` VALUES ('10', '1', 'MZ', '【太可爱了啊啊啊啊】', '可爱', '4', '其它', '卡哇伊不解释！！！', 'MTQyNTM5MTg1OA==.jpg', 'MTQyNTM5MTg1Nw==.mp4', '1425391857', '1198636', '0', '0', '0', '0', '0');
INSERT INTO `video` VALUES ('11', '1', 'MZ', '【梦幻来袭】', '萌物', '1', '娱乐', '梦幻出现了，怎么样可爱吧。。。', 'MTQyNTM5MTk2OA==.jpg', 'MTQyNTM5MTk2Nw==.mp4', '1425391967', '1198636', '0', '0', '0', '0', '0');
INSERT INTO `video` VALUES ('12', '1', 'MZ', '皮卡丘！', '皮卡丘', '1', '娱乐', '皮卡丘好像不高兴了，这是为什么呢？是太冷了么？', 'MTQyNTM5MjAyOQ==.jpg', 'MTQyNTM5MjAyOA==.mp4', '1425392028', '3246238', '0', '0', '0', '0', '0');
INSERT INTO `video` VALUES ('13', '1', 'MZ', '【极光】', '美景', '1', '娱乐', '各种小精灵都来看极光了，你也要来哦！', 'MTQyNTM5MjMzNA==.jpg', 'MTQyNTM5MjMzMw==.mp4', '1425392333', '1198636', '1', '0', '0', '0', '1');
INSERT INTO `video` VALUES ('14', '1', 'MZ', '【惊悚】可拉可拉的噩梦', '恐怖', '1', '娱乐', '可拉可拉心中的梦魇又出现了，好可怕啊！！', 'MTQyNTM5MjQ2OQ==.png', 'MTQyNTM5MjQ2OA==.mp4', '1425392468', '1198636', '0', '0', '0', '0', '0');
INSERT INTO `video` VALUES ('15', '1', 'MZ', '大海的掌控者-&gt;海皇牙', '神兽', '1', '娱乐', '哇咔咔咔咔', 'MTQyNTM5MjYxNA==.jpg', 'MTQyNTM5MjYxMw==.mp4', '1425392613', '3246238', '0', '0', '0', '0', '0');
INSERT INTO `video` VALUES ('16', '1', 'MZ', '【霸气】血翼飞龙特写', '龙', '3', '科技', '喷火的血翼飞龙，威武霸气，别错过哦', 'MTQyNTM5MjY5Mw==.jpg', 'MTQyNTM5MjY5Mg==.mp4', '1425392692', '3246238', '0', '0', '0', '0', '0');
INSERT INTO `video` VALUES ('17', '1', 'MZ', '梦幻蓝水都', '奇妙', '3', '科技', '奇幻之旅！', 'MTQyNTM5MjgwNA==.jpg', 'MTQyNTM5MjgwMw==.mp4', '1425392803', '3246238', '0', '0', '0', '0', '0');
INSERT INTO `video` VALUES ('18', '1', 'MZ', '可爱红水都', '可爱', '3', '科技', '卖萌大战！不要错过！', 'MTQyNTM5Mjg3NQ==.jpg', 'MTQyNTM5Mjg3NA==.mp4', '1425392874', '3246238', '0', '0', '0', '0', '0');
INSERT INTO `video` VALUES ('19', '1', 'MZ', '【鬼畜第二弹】吓哭波克比', '鬼畜', '3', '科技', '可怜的波克比被吓坏了，快来看看怎么回事？', 'MTQyNTM5MzAzOQ==.png', 'MTQyNTM5MzAzOA==.mp4', '1425393038', '3246238', '0', '0', '0', '0', '0');
INSERT INTO `video` VALUES ('20', '1', 'MZ', '超梦也来了！', '超梦', '3', '科技', '超梦是否能逃离火箭队的魔掌？让我们拭目以待！', 'MTQyNTM5MzE0MQ==.jpg', 'MTQyNTM5MzE0MA==.mp4', '1425393140', '3246238', '0', '0', '0', '0', '0');
