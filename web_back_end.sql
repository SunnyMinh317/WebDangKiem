-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 24, 2023 at 08:06 PM
-- Server version: 8.0.30
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web_back_end`
--

-- --------------------------------------------------------

--
-- Table structure for table `centre`
--

CREATE TABLE `centre` (
  `centreId` varchar(15) NOT NULL,
  `centreName` varchar(50) DEFAULT NULL,
  `centreCity` varchar(20) DEFAULT NULL,
  `centreDistrict` varchar(30) DEFAULT NULL,
  `establishedDate` date DEFAULT NULL,
  `centreEmail` varchar(30) DEFAULT NULL,
  `centrePassword` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `centre`
--

INSERT INTO `centre` (`centreId`, `centreName`, `centreCity`, `centreDistrict`, `establishedDate`, `centreEmail`, `centrePassword`) VALUES
('1', 'Trung tâm đăng kiểm Quận Hoàn Kiếm, Thanh Hóa', 'Thành phố HCM', 'Đống Đa', '2009-08-04', 'L2cvfw3PmQ@gmail.com', '1'),
('2', 'Trung tâm đăng kiểm Quận Thanh Xuân, Thành phố HCM', 'Cần Thơ', 'Bắc Từ Liêm', '1991-05-13', 'G9ZFolSdwK@gmail.com', '1'),
('3', 'Trung tâm đăng kiểm Quận Đống Đa, Thanh Hóa', 'Thanh Hóa', 'Hoàng Mai', '1991-03-08', 'ScjiYj85TN@gmail.com', '1'),
('4', 'Trung tâm đăng kiểm Quận Bắc Từ Liêm, Thanh Hóa', 'Thành phố HCM', 'Bắc Từ Liêm', '1990-07-29', 'baiXjR4GSW@gmail.com', '1'),
('5', 'Trung tâm đăng kiểm Quận Hoàn Kiếm, Cần Thơ', 'Hải Phòng', 'Đống Đa', '1995-01-06', 'afV25BGots@gmail.com', '1'),
('6', 'Trung tâm đăng kiểm Quận Thanh Xuân, Huế', 'Hà Nội', 'Tây Hồ', '2006-03-20', '1WCsJMoOFe@gmail.com', '1'),
('7', 'Trung tâm đăng kiểm Quận Bắc Từ Liêm, Hà Nội', 'Thành phố HCM', 'Hoàn Kiếm', '1999-09-21', 'c1U0kBLmsQ@gmail.com', '1'),
('8', 'Trung tâm đăng kiểm Quận Tây Hồ, Hà Nội', 'Hải Phòng', 'Bắc Từ Liêm', '1993-02-20', 'oPJIqJqG4R@gmail.com', '1'),
('9', 'Trung tâm đăng kiểm Quận Bắc Từ Liêm, Hà Nội', 'Hải Phòng', 'Bắc Từ Liêm', '1991-11-23', 'n5Wwypp8q3@gmail.com', '1');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `ownerId` int NOT NULL,
  `dob` date DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `representative` varchar(20) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`ownerId`, `dob`, `name`, `representative`, `address`, `phone`) VALUES
(1, '1989-08-10', 'CP Thu Phương', 'Huỳnh Thu Phương', 'Cần Thơ', '0142530060'),
(2, '2003-11-25', 'TNHH Huy Ngô', 'Phùng Huy Ngô', 'Nam Định', '0414086543'),
(3, '1991-02-08', 'TN Thị Đức', 'Đồng Thị Đức', 'Biên Hòa', '0414216435'),
(4, '1983-05-25', 'CP Đức Hữu', 'Trịnh Đức Hữu', 'Huế', '0044837717'),
(5, '1991-10-23', 'HP Quỳnh Trịch', 'Trịnh Quỳnh Trịch', 'Quy Nhơn', '0385423475'),
(6, '1981-07-08', 'TNHHMTV Phan Phan', 'Trịnh Phan Phan', 'Nam Định', '0876236984'),
(7, '1991-12-12', 'TNHHMTV Văn Đinh', 'Đồng Văn Đinh', 'Buôn Ma Thuột', '0122154780'),
(8, '1969-09-11', 'TN Văn Vương', 'Đỗ Văn Vương', 'Nam Định', '0581478060'),
(9, '1968-10-31', 'TNHH Văn Trọng', 'Lê Văn Trọng', 'Đà Lạt', '0694470479'),
(10, '1977-12-02', 'HP Minh Trần', 'Đinh Minh Trần', 'Hưng Yên', '0837915119'),
(11, '2000-03-12', 'HP Văn Khuất', 'Hồ Văn Khuất', 'Hạ Long', '0672977004'),
(12, '1966-09-18', 'HP Ngọc Đặng', 'Phạm Ngọc Đặng', 'Phan Thiết', '0376611032'),
(13, '1993-05-12', 'CP Văn Quỳnh', 'Nguyễn Văn Quỳnh', 'Đà Nẵng', '0274807268'),
(14, '1976-09-22', 'HP Đức Tâm', 'Mai Đức Tâm', 'Nam Định', '0437768097'),
(15, '1960-12-25', 'HP Huy Thu', 'Nguyễn Huy Thu', 'Hà Nội', '0996903084'),
(16, '1970-02-26', 'HP Văn Anh', 'Hoàng Văn Anh', 'Hạ Long', '0755818332'),
(17, '1967-06-24', 'TN Xuân Trịch', 'Vũ Xuân Trịch', 'Hưng Yên', '0456925080'),
(18, '1974-01-24', 'CP Ngọc Phan', 'Phan Ngọc Phan', 'Nam Định', '0043073160'),
(19, '1964-02-13', 'TNHHMTV Tâm Thạch', 'Vũ Tâm Thạch', 'Hạ Long', '0527322581'),
(20, '1983-01-02', 'CP Thị Lương', 'Võ Thị Lương', 'Hải Dương', '0316191668'),
(21, '1970-04-21', 'TNHHMTV Thị Thị', 'Nguyễn Thị Thị', 'Huế', '0933697868'),
(22, '1967-01-25', 'TNHHMTV Quang Nguyễn', 'Võ Quang Nguyễn', 'Nha Trang', '0465100597'),
(23, '1987-06-13', 'HP Văn Vương', 'Phan Văn Vương', 'Nha Trang', '0164789235'),
(24, '1971-03-08', 'CP Tâm Giang', 'Phạm Tâm Giang', 'Thái Nguyên', '0031915449'),
(25, '1971-12-12', 'HP Quỳnh Anh', 'Phùng Quỳnh Anh', 'Quy Nhơn', '0642319427'),
(26, '1969-07-07', 'HP Văn Võ', 'Trịnh Văn Võ', 'Hạ Long', '0497786638'),
(27, '1981-04-21', 'HP Văn Giang', 'Đinh Văn Giang', 'Rạch Giá', '0659842217'),
(28, '1973-12-24', 'TNHH Đức Nguyễn', 'Đinh Đức Nguyễn', 'Vũng Tàu', '0726642655'),
(29, '1969-09-17', 'TNHHMTV Linh Kiều', 'Vương Linh Kiều', 'Cần Thơ', '0720307400'),
(30, '1967-05-01', 'TN Đức Linh', 'Bùi Đức Linh', 'Hải Phòng', '0440532563'),
(31, '1966-07-17', 'CP Cao Tạ', 'Bùi Cao Tạ', 'Vũng Tàu', '0098335460'),
(32, '1981-10-01', 'TNHH Văn Linh', 'Hoàng Văn Linh', 'Đà Lạt', '0311836570'),
(33, '1983-09-01', 'HP Văn Bành', 'Phạm Văn Bành', 'Đà Nẵng', '0896711118'),
(34, '1990-06-12', 'TNHHMTV Như Tú', 'Lê Như Tú', 'Hải Dương', '0981034302'),
(35, '1997-03-13', 'HP Đăng Hữu', 'Phạm Đăng Hữu', 'Thành phố Hồ Chí Minh', '0520239951'),
(36, '1969-06-29', 'HP Thị Hữu', 'Lý Thị Hữu', 'Vũng Tàu', '0395095716'),
(37, '1966-10-17', 'TNHHMTV Võ Trọng', 'Đinh Võ Trọng', 'Hà Nội', '0963863939'),
(38, '1963-12-22', 'TNHHMTV Như Phạm', 'Bạch Như Phạm', 'Hà Nội', '0570442534'),
(39, '1969-04-03', 'HP Bích Lương', 'Lê Bích Lương', 'Quy Nhơn', '0257065451'),
(40, '1981-03-04', 'CP Bích Hải', 'Đỗ Bích Hải', 'Long Xuyên', '0056423170'),
(41, '1961-04-17', 'TNHH Văn Đoàn', 'Đinh Văn Đoàn', 'Nha Trang', '0015180876'),
(42, '1980-09-30', 'HP Thành Nguyễn', 'Bùi Thành Nguyễn', 'Hải Dương', '0767296532'),
(43, '1970-10-02', 'CP Văn Đinh', 'Bạch Văn Đinh', 'Hưng Yên', '0453725677'),
(44, '1981-07-12', 'CP Văn Lê', 'Đỗ Văn Lê', 'Quy Nhơn', '0235202430'),
(45, '1980-06-15', 'CP Tâm Tạ', 'Võ Tâm Tạ', 'Hà Nội', '0375473789'),
(46, '1985-03-03', 'HP Hữu Giang', 'Bạch Hữu Giang', 'Hải Phòng', '0947296638'),
(47, '1986-07-25', 'TNHHMTV Huy Trương', 'Phí Huy Trương', 'Hưng Yên', '0296802583'),
(48, '1977-07-01', 'TNHH Thị Đào', 'Đinh Thị Đào', 'Thành phố Hồ Chí Minh', '0104689057'),
(49, '1992-12-21', 'TNHH Phan Bùi', 'Võ Phan Bùi', 'Phan Thiết', '0854569883'),
(50, '2004-01-17', 'TNHHMTV Xuân Phùng', 'Vũ Xuân Phùng', 'Đà Nẵng', '0600175771'),
(51, '1975-04-06', 'TNHH Văn Khương', 'Vũ Văn Khương', 'Hưng Yên', '0564170290'),
(52, '1981-12-12', 'HP Văn Đặng', 'Đoàn Văn Đặng', 'Thái Nguyên', '0899252149'),
(53, '1983-04-17', 'TN Văn Lương', 'Lê Văn Lương', 'Rạch Giá', '0832314389'),
(54, '1961-08-25', 'HP Đức Tú', 'Lý Đức Tú', 'Hưng Yên', '0105280177'),
(55, '1979-08-13', 'TNHHMTV Thị Trương', 'Đặng Thị Trương', 'Quy Nhơn', '0256944038'),
(56, '1973-01-27', 'TNHH Thu Mai', 'Phùng Thu Mai', 'Huế', '0922012411'),
(57, '1979-06-07', 'HP Huy Khương', 'Vũ Huy Khương', 'Nha Trang', '0000428357'),
(58, '1966-03-09', 'TN Đức Hứa', 'Phí Đức Hứa', 'Hải Phòng', '0001168877'),
(59, '1977-07-28', 'HP Văn Thị', 'Đỗ Văn Thị', 'Long Xuyên', '0651765242'),
(60, '1965-04-11', 'HP Bích Lê', 'Vương Bích Lê', 'Biên Hòa', '0909012157'),
(61, '1970-09-29', 'HP Đức Phan', 'Nguyễn Đức Phan', 'Vũng Tàu', '0664784723'),
(62, '1983-03-13', 'TNHHMTV Thị Đào', 'Đinh Thị Đào', 'Vũng Tàu', '0985100043'),
(63, '1997-06-10', 'TNHHMTV Minh Phùng', 'Vũ Minh Phùng', 'Huế', '0009173397'),
(64, '1999-07-22', 'HP Văn Trọng', 'Phùng Văn Trọng', 'Quy Nhơn', '0122898246'),
(65, '2004-03-08', 'HP Thu Trịch', 'Lê Thu Trịch', 'Huế', '0908882498'),
(66, '1978-12-13', 'TN Văn Bùi', 'Đoàn Văn Bùi', 'Quy Nhơn', '0280600193'),
(67, '1984-12-24', 'TNHHMTV Đức Thạch', 'Lê Đức Thạch', 'Thái Nguyên', '0847999178'),
(68, '1998-02-06', 'TNHHMTV Mai Nguyễn', 'Phùng Mai Nguyễn', 'Long Xuyên', '0957899871'),
(69, '2001-01-28', 'TNHHMTV Lương Khương', 'Hoàng Lương Khương', 'Đà Lạt', '0605287096'),
(70, '1960-08-03', 'TNHH Văn Thành', 'Phùng Văn Thành', 'Thái Nguyên', '0206055219'),
(71, '1987-01-06', 'HP Hồng Anh', 'Vũ Hồng Anh', 'Phan Thiết', '0526237930'),
(72, '2000-04-19', 'HP Thị Thủy', 'Trịnh Thị Thủy', 'Hưng Yên', '0070397478'),
(73, '1998-06-03', 'CP Văn Phạm', 'Vũ Văn Phạm', 'Rạch Giá', '0176960443'),
(74, '2002-06-07', 'TNHH Thị Thạch', 'Phan Thị Thạch', 'Hưng Yên', '0972048046'),
(75, '1987-02-14', 'TN Lương Kiều', 'Huỳnh Lương Kiều', 'Nha Trang', '0554579877'),
(76, '1978-10-23', 'CP Thị Lý', 'Phạm Thị Lý', 'Quy Nhơn', '0892894099'),
(77, '1996-12-25', 'CP Đăng Đinh', 'Lê Đăng Đinh', 'Huế', '0432473669'),
(78, '2001-08-02', 'TNHHMTV Linh Bùi', 'Đồng Linh Bùi', 'Cần Thơ', '0015827950'),
(79, '1966-01-29', 'TN Hải Kiều', 'Phí Hải Kiều', 'Quy Nhơn', '0495743080'),
(80, '1994-01-18', 'TN Thị Hữu', 'Vương Thị Hữu', 'Cần Thơ', '0011897264'),
(81, '1992-05-10', 'TNHHMTV Văn Đỗ', 'Đồng Văn Đỗ', 'Vũng Tàu', '0616025316'),
(82, '1970-10-21', 'CP Tâm Trọng', 'Võ Tâm Trọng', 'Hải Dương', '0415325165'),
(83, '1963-06-22', 'TNHHMTV Đức Mai', 'Đinh Đức Mai', 'Huế', '0220306384'),
(84, '1971-03-10', 'HP Phùng Trịnh', 'Vương Phùng Trịnh', 'Hà Nội', '0240639563'),
(85, '1971-01-18', 'HP Văn Phan', 'Trịnh Văn Phan', 'Hải Dương', '0528051255'),
(86, '1992-07-16', 'TN Văn Phan', 'Phí Văn Phan', 'Cần Thơ', '0473175826'),
(87, '1985-02-04', 'TNHHMTV Võ Bành', 'Mai Võ Bành', 'Hải Dương', '0957704473'),
(88, '1985-04-16', 'HP Đức Trương', 'Vũ Đức Trương', 'Hải Phòng', '0753107855'),
(89, '1963-07-19', 'TNHHMTV Phan Phương', 'Vương Phan Phương', 'Cần Thơ', '0389913726'),
(90, '1980-06-05', 'TN Thị Thành', 'Đoàn Thị Thành', 'Phan Thiết', '0073811245'),
(91, '1968-08-05', 'HP Thị Trương', 'Bùi Thị Trương', 'Thành phố Hồ Chí Minh', '0181438701'),
(92, '1987-02-17', 'TNHH Lương Mai', 'Đinh Lương Mai', 'Đà Nẵng', '0832540829'),
(93, '1961-03-23', 'HP Văn Thu', 'Bùi Văn Thu', 'Thái Nguyên', '0537124715'),
(94, '1983-06-16', 'HP Huy Linh', 'Phạm Huy Linh', 'Thái Nguyên', '0419270239'),
(95, '1964-04-26', 'TN Văn Thu', 'Mai Văn Thu', 'Huế', '0591033866'),
(96, '1965-11-13', 'CP Thị Mai', 'Hoàng Thị Mai', 'Biên Hòa', '0512852535'),
(97, '1988-08-28', 'HP Văn Tú', 'Phùng Văn Tú', 'Biên Hòa', '0515136934'),
(98, '1973-01-07', 'TNHHMTV Đức Trương', 'Đồng Đức Trương', 'Nha Trang', '0841152148'),
(99, '1990-11-12', 'TN Văn Linh', 'Đồng Văn Linh', 'Phan Thiết', '0178061114'),
(100, '1992-06-28', 'HP Linh Tú', 'Lý Linh Tú', 'Thành phố Hồ Chí Minh', '0451582617');

-- --------------------------------------------------------

--
-- Table structure for table `companyvehicle`
--

CREATE TABLE `companyvehicle` (
  `ownerId` int DEFAULT NULL,
  `licensePlate` varchar(20) DEFAULT NULL,
  `startDate` date NOT NULL,
  `endDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `companyvehicle`
--

INSERT INTO `companyvehicle` (`ownerId`, `licensePlate`, `startDate`, `endDate`) VALUES
(1, '11A-00001', '2022-01-15', NULL),
(2, '11A-00002', '2022-03-14', NULL),
(3, '11A-00003', '2003-08-25', NULL),
(4, '11A-00004', '2017-09-19', NULL),
(5, '11A-00005', '2008-06-05', NULL),
(6, '11A-00006', '2017-11-02', NULL),
(7, '11A-00007', '2000-03-20', NULL),
(8, '11A-00008', '2004-03-14', NULL),
(9, '11A-00009', '2009-05-13', NULL),
(10, '11A-00010', '2005-03-19', NULL),
(11, '12B-00011', '2018-08-24', NULL),
(12, '12B-00012', '2014-03-17', NULL),
(13, '12B-00013', '2015-05-06', NULL),
(14, '12B-00014', '2019-09-24', NULL),
(15, '12B-00015', '2004-07-03', NULL),
(16, '12B-00016', '2014-08-27', NULL),
(17, '12B-00017', '2015-08-18', NULL),
(18, '12B-00018', '2019-11-28', NULL),
(19, '12B-00019', '2000-09-21', NULL),
(20, '12B-00020', '2001-12-06', NULL),
(11, '14C-00011', '2006-03-14', NULL),
(12, '14C-00012', '2022-01-04', NULL),
(13, '14C-00013', '2005-08-07', NULL),
(14, '14C-00014', '2005-12-04', NULL),
(15, '14C-00015', '2019-02-02', NULL),
(16, '14C-00016', '2021-05-05', NULL),
(17, '14C-00017', '2006-11-14', NULL),
(18, '14C-00018', '2011-10-06', NULL),
(19, '14C-00019', '2009-10-14', NULL),
(20, '14C-00020', '2022-08-13', NULL),
(11, '15D-00011', '2020-11-26', NULL),
(12, '15D-00012', '2013-09-07', NULL),
(13, '15D-00013', '2011-06-20', NULL),
(14, '15D-00014', '2006-05-10', NULL),
(15, '15D-00015', '2022-06-26', NULL),
(16, '15D-00016', '2007-04-14', NULL),
(17, '15D-00017', '2007-01-14', NULL),
(18, '15D-00018', '2016-06-16', NULL),
(19, '15D-00019', '2014-05-25', NULL),
(20, '15D-00020', '2000-04-06', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `owner`
--

CREATE TABLE `owner` (
  `ownerId` int NOT NULL,
  `dob` date DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `owner`
--

INSERT INTO `owner` (`ownerId`, `dob`, `name`, `address`, `phone`) VALUES
(1, '1973-12-31', 'Lê Xuân Hiếu', 'Hải Phòng', '0419147116'),
(2, '1966-07-06', 'Vũ Đắc Khiêm', 'Đà Lạt', '0950585561'),
(3, '1979-10-09', 'Trịnh Quang Đức', 'Quy Nhơn', '0749113680'),
(4, '2002-04-17', 'Nguyễn Minh Linh', 'Hải Phòng', '0820487391'),
(5, '1988-06-21', 'Lê Đắc Tùng', 'Phan Thiết', '0117080888'),
(6, '1984-11-20', 'Lê Đăng Đức', 'Thái Nguyên', '0876458883'),
(7, '2003-03-27', 'Nguyễn Xuân Ân', 'Hạ Long', '0133409556'),
(8, '1972-01-27', 'Lê Đắc Đức', 'Hưng Yên', '0234846268'),
(9, '2004-04-30', 'Lê Việt Hùng', 'Hà Nội', '0663740043'),
(10, '1975-11-08', 'Trịnh Đăng Hiếu', 'Hà Nội', '0413951110'),
(11, '1963-09-26', 'Phạm Quang Đăng', 'Rạch Giá', '0781650870'),
(12, '1997-10-08', 'Phạm Minh Duy', 'Hạ Long', '0510333134'),
(13, '2000-01-24', 'Đinh Đăng Tùng', 'Hải Dương', '0605107014'),
(14, '2001-07-27', 'Trịnh Hoàng Tùng', 'Hưng Yên', '0776139660'),
(15, '1999-08-27', 'Phạm Văn Hùng', 'Nam Định', '0792185002'),
(16, '1996-09-13', 'Phạm Đăng Linh', 'Thành phố Hồ Chí Minh', '0098324073'),
(17, '1995-08-31', 'Đinh Văn Tùng', 'Thành phố Hồ Chí Minh', '0242871782'),
(18, '1993-09-04', 'Phạm Đăng Minh', 'Cần Thơ', '0249403431'),
(19, '2004-06-03', 'Lê Hà Ân', 'Hạ Long', '0615149583'),
(20, '1992-05-26', 'Trịnh Hoàng Duy', 'Thành phố Hồ Chí Minh', '0042510459'),
(21, '1967-10-02', 'Lê Hoàng Ân', 'Vũng Tàu', '0520106185'),
(22, '1990-07-28', 'Đinh Xuân Khiêm', 'Đà Lạt', '0567250261'),
(23, '1961-06-26', 'Nguyễn Đăng Đức', 'Nha Trang', '0639572835'),
(24, '1995-12-17', 'Đinh Hoàng Minh', 'Long Xuyên', '0337649627'),
(25, '2004-02-21', 'Phạm Đăng Đăng', 'Rạch Giá', '0316443065'),
(26, '2004-06-20', 'Phạm Đắc Duy', 'Hạ Long', '0939965139'),
(27, '1981-06-23', 'Phạm Xuân Ân', 'Thái Nguyên', '0567996388'),
(28, '1964-12-21', 'Nguyễn Việt Tùng', 'Vũng Tàu', '0164665904'),
(29, '1964-05-22', 'Đinh Minh Tùng', 'Thành phố Hồ Chí Minh', '0774593649'),
(30, '1975-03-07', 'Đinh Việt Tùng', 'Biên Hòa', '0517318479'),
(31, '1985-04-22', 'Trịnh Quang Khiêm', 'Rạch Giá', '0462782537'),
(32, '1966-11-15', 'Vũ Hoàng Duy', 'Nha Trang', '0253994365'),
(33, '1962-02-07', 'Nguyễn Văn Minh', 'Quy Nhơn', '0516486955'),
(34, '1960-07-11', 'Vũ Việt Hùng', 'Nam Định', '0930648523'),
(35, '1964-10-26', 'Lê Đắc Đăng', 'Rạch Giá', '0463322071'),
(36, '1973-06-10', 'Lê Quang Duy', 'Rạch Giá', '0274060186'),
(37, '1975-05-23', 'Lê Đắc Hiếu', 'Hưng Yên', '0646806204'),
(38, '2000-12-28', 'Đinh Hoàng Tùng', 'Hạ Long', '0977331175'),
(39, '1995-05-09', 'Đinh Văn Khiêm', 'Hải Dương', '0669722448'),
(40, '1967-04-20', 'Vũ Đăng Đức', 'Đà Lạt', '0850893601'),
(41, '1975-11-15', 'Vũ Minh Đăng', 'Đà Nẵng', '0528151585'),
(42, '1979-12-16', 'Lê Hoàng Tùng', 'Buôn Ma Thuột', '0967890416'),
(43, '1998-06-29', 'Lê Hoàng Khánh', 'Phan Thiết', '0638182297'),
(44, '1968-08-31', 'Nguyễn Hoàng Linh', 'Quy Nhơn', '0987310140'),
(45, '1983-03-24', 'Lê Xuân Khánh', 'Buôn Ma Thuột', '0967005486'),
(46, '1997-10-14', 'Phạm Xuân Duy', 'Quy Nhơn', '0731629528'),
(47, '2005-03-05', 'Đinh Xuân Linh', 'Vũng Tàu', '0414879083'),
(48, '1982-02-13', 'Lê Quang Hiếu', 'Long Xuyên', '0319643169'),
(49, '1991-08-23', 'Lê Xuân Khánh', 'Phan Thiết', '0388411370'),
(50, '1961-12-22', 'Nguyễn Quang Ân', 'Hạ Long', '0617523042'),
(51, '1984-01-10', 'Lê Đắc Hiếu', 'Hải Dương', '0115213941'),
(52, '1981-11-14', 'Đinh Văn Duy', 'Hưng Yên', '0911392540'),
(53, '2003-05-27', 'Lê Văn Hùng', 'Vũng Tàu', '0420013613'),
(54, '1975-01-11', 'Trịnh Quang Khiêm', 'Nha Trang', '0637571785'),
(55, '1997-10-23', 'Đinh Việt Tuấn', 'Đà Lạt', '0787407014'),
(56, '1988-11-07', 'Trịnh Xuân Tuấn', 'Biên Hòa', '0705994740'),
(57, '2002-07-25', 'Phạm Minh Tùng', 'Buôn Ma Thuột', '0606656457'),
(58, '1967-12-07', 'Trịnh Đắc Khánh', 'Rạch Giá', '0790302601'),
(59, '1966-07-18', 'Phạm Quang Linh', 'Cần Thơ', '0922388705'),
(60, '1974-07-16', 'Trịnh Văn Minh', 'Thái Nguyên', '0398225382'),
(61, '1961-05-23', 'Vũ Đăng Hùng', 'Thái Nguyên', '0547408768'),
(62, '1989-06-25', 'Lê Văn Đăng', 'Đà Nẵng', '0249864854'),
(63, '1995-10-19', 'Đinh Đăng Duy', 'Huế', '0242882599'),
(64, '1969-06-16', 'Vũ Đắc Ân', 'Long Xuyên', '0140873956'),
(65, '1989-11-17', 'Đinh Quang Khiêm', 'Hưng Yên', '0656552818'),
(66, '1997-01-22', 'Phạm Văn Ân', 'Đà Nẵng', '0238669383'),
(67, '1963-11-20', 'Nguyễn Đăng Khiêm', 'Hải Dương', '0226441031'),
(68, '1982-11-05', 'Trịnh Minh Hùng', 'Hải Dương', '0799188094'),
(69, '1970-08-08', 'Đinh Xuân Khánh', 'Đà Nẵng', '0759546987'),
(70, '2001-08-11', 'Nguyễn Quang Ân', 'Long Xuyên', '0722614421'),
(71, '1961-11-03', 'Phạm Việt Đức', 'Hải Dương', '0674964639'),
(72, '1971-01-24', 'Phạm Hà Linh', 'Cần Thơ', '0011354510'),
(73, '1970-08-31', 'Đinh Hoàng Khiêm', 'Nha Trang', '0797083774'),
(74, '1994-01-14', 'Trịnh Đăng Đăng', 'Nam Định', '0912720133'),
(75, '1964-06-02', 'Trịnh Hà Tùng', 'Hà Nội', '0484707899'),
(76, '1990-02-14', 'Lê Đắc Khánh', 'Thái Nguyên', '0797573622'),
(77, '1974-07-21', 'Nguyễn Hoàng Đức', 'Buôn Ma Thuột', '0586734510'),
(78, '1961-04-27', 'Lê Quang Hiếu', 'Hà Nội', '0817871490'),
(79, '1980-08-21', 'Vũ Quang Đăng', 'Hạ Long', '0835272257'),
(80, '1959-04-29', 'Đinh Hà Minh', 'Đà Nẵng', '0049558031'),
(81, '1984-11-23', 'Vũ Văn Khánh', 'Đà Nẵng', '0383353904'),
(82, '2004-09-26', 'Trịnh Quang Duy', 'Nha Trang', '0453059820'),
(83, '1965-09-19', 'Phạm Văn Đức', 'Huế', '0908294458'),
(84, '1994-01-31', 'Đinh Đăng Minh', 'Huế', '0988632574'),
(85, '1984-03-30', 'Trịnh Đắc Đăng', 'Quy Nhơn', '0240820893'),
(86, '1966-06-21', 'Đinh Đăng Hiếu', 'Phan Thiết', '0089693381'),
(87, '1967-08-17', 'Lê Xuân Duy', 'Vũng Tàu', '0072733503'),
(88, '1962-06-18', 'Nguyễn Hoàng Linh', 'Buôn Ma Thuột', '0739154607'),
(89, '1959-09-03', 'Vũ Hà Đức', 'Thành phố Hồ Chí Minh', '0853133684'),
(90, '1969-08-24', 'Nguyễn Đắc Linh', 'Long Xuyên', '0719599914'),
(91, '1993-11-18', 'Nguyễn Văn Hùng', 'Biên Hòa', '0811430851'),
(92, '1961-03-06', 'Phạm Minh Khánh', 'Hạ Long', '0539736816'),
(93, '1960-12-24', 'Nguyễn Đắc Linh', 'Thành phố Hồ Chí Minh', '0629623615'),
(94, '1983-10-20', 'Vũ Văn Khiêm', 'Đà Nẵng', '0436206668'),
(95, '1999-12-20', 'Trịnh Xuân Duy', 'Đà Lạt', '0510555411'),
(96, '1960-03-15', 'Phạm Hà Hùng', 'Phan Thiết', '0235146348'),
(97, '1993-04-26', 'Lê Quang Hùng', 'Vũng Tàu', '0156726157'),
(98, '1961-02-15', 'Vũ Đăng Tùng', 'Hà Nội', '0208157149'),
(99, '1990-06-26', 'Phạm Hà Ân', 'Rạch Giá', '0257292369'),
(100, '1970-05-17', 'Trịnh Đăng Tùng', 'Hưng Yên', '0895842726'),
(101, '1976-03-08', 'Lê Quang Đăng', 'Huế', '0221767666'),
(102, '1998-12-01', 'Trịnh Đắc Ân', 'Hải Phòng', '0223770171'),
(103, '2001-01-12', 'Vũ Đăng Đức', 'Nam Định', '0614251806'),
(104, '1966-12-06', 'Nguyễn Quang Khánh', 'Hải Dương', '0286300370'),
(105, '1961-03-10', 'Phạm Hà Khánh', 'Biên Hòa', '0326811382'),
(106, '1972-12-26', 'Phạm Minh Hùng', 'Cần Thơ', '0447063933'),
(107, '1990-06-03', 'Vũ Xuân Đăng', 'Đà Nẵng', '0691243934'),
(108, '1967-04-28', 'Vũ Đăng Duy', 'Nam Định', '0339722759'),
(109, '1991-06-27', 'Lê Quang Khiêm', 'Quy Nhơn', '0894806388');

-- --------------------------------------------------------

--
-- Table structure for table `ownervehicle`
--

CREATE TABLE `ownervehicle` (
  `ownerId` int DEFAULT NULL,
  `licensePlate` varchar(20) DEFAULT NULL,
  `startDate` date NOT NULL,
  `endDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ownervehicle`
--

INSERT INTO `ownervehicle` (`ownerId`, `licensePlate`, `startDate`, `endDate`) VALUES
(11, '11A-00011', '2000-06-10', NULL),
(12, '11A-00012', '2007-04-19', NULL),
(13, '11A-00013', '2018-12-19', NULL),
(14, '11A-00014', '2014-06-28', NULL),
(15, '11A-00015', '2019-01-25', NULL),
(16, '11A-00016', '2011-01-03', NULL),
(17, '11A-00017', '2000-07-20', NULL),
(18, '11A-00018', '2001-04-26', NULL),
(19, '11A-00019', '2002-09-26', NULL),
(20, '11A-00020', '2009-05-09', NULL),
(1, '12B-00001', '2019-07-26', NULL),
(2, '12B-00002', '2001-12-10', NULL),
(3, '12B-00003', '2020-05-27', NULL),
(4, '12B-00004', '2016-05-14', NULL),
(5, '12B-00005', '2013-03-10', NULL),
(6, '12B-00006', '2004-07-23', NULL),
(7, '12B-00007', '2002-09-24', NULL),
(8, '12B-00008', '2006-09-02', NULL),
(9, '12B-00009', '2008-04-22', NULL),
(10, '12B-00010', '2005-02-12', NULL),
(1, '14C-00001', '2014-04-05', NULL),
(2, '14C-00002', '2018-08-03', NULL),
(3, '14C-00003', '2003-09-02', NULL),
(4, '14C-00004', '2017-08-07', NULL),
(5, '14C-00005', '2014-01-10', NULL),
(6, '14C-00006', '2008-12-26', NULL),
(7, '14C-00007', '2006-12-14', NULL),
(8, '14C-00008', '2001-04-17', NULL),
(9, '14C-00009', '2019-03-12', NULL),
(10, '14C-00010', '2020-11-02', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `region`
--

CREATE TABLE `region` (
  `regionId` int NOT NULL,
  `regionName` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `region`
--

INSERT INTO `region` (`regionId`, `regionName`) VALUES
(11, 'Cao Bằng'),
(12, 'Lạng Sơn'),
(14, 'Quảng Ninh'),
(15, 'Hải Phòng'),
(16, 'Hải Phòng'),
(17, 'Thái Bình'),
(18, 'Nam Định'),
(19, 'Phú Thọ'),
(20, 'Thái Nguyên'),
(21, 'Yên Bái'),
(22, 'Tuyên Quang'),
(23, 'Hà Giang'),
(24, 'Lào Cai'),
(25, 'Lai Châu'),
(26, 'Sơn La'),
(27, 'Điện Biên'),
(28, 'Hòa Bình'),
(29, 'Hà Nội'),
(30, 'Hà Nội'),
(31, 'Hà Nội'),
(32, 'Hà Nội'),
(33, 'Hà Nội'),
(34, 'Hải Dương'),
(35, 'Ninh Bình'),
(36, 'Thanh Hóa'),
(37, 'Nghệ An'),
(38, 'Hà Tĩnh'),
(39, 'Đồng Nai'),
(40, 'Hà Nội'),
(41, 'TP. Hồ Chí Minh'),
(43, 'TP. Đà Nẵng'),
(47, 'Đắk Lắk'),
(48, 'Đắk Nông'),
(49, 'Lâm Đồng'),
(50, 'TP. Hồ Chí Minh'),
(51, 'TP. Hồ Chí Minh'),
(52, 'TP. Hồ Chí Minh'),
(53, 'TP. Hồ Chí Minh'),
(54, 'TP. Hồ Chí Minh'),
(55, 'TP. Hồ Chí Minh'),
(56, 'TP. Hồ Chí Minh'),
(57, 'TP. Hồ Chí Minh'),
(58, 'TP. Hồ Chí Minh'),
(59, 'TP. Hồ Chí Minh'),
(60, 'Đồng Nai'),
(61, 'Bình Dương'),
(62, 'Long An'),
(63, 'Tiền Giang'),
(64, 'Vĩnh Long'),
(65, 'Cần Thơ'),
(66, 'Đồng Tháp'),
(67, 'An Giang'),
(68, 'Kiên Giang'),
(69, 'Cà Mau'),
(70, 'Tây Ninh'),
(71, 'Bến Tre'),
(72, 'Bà Rịa - Vũng Tàu'),
(73, 'Quảng Bình'),
(74, 'Quảng Trị'),
(75, 'Thừa Thiên Huế'),
(76, 'Quảng Ngãi'),
(77, 'Bình Định'),
(78, 'Phú Yên'),
(79, 'Khánh Hòa'),
(81, 'Gia Lai'),
(82, 'Kon Tum'),
(83, 'Sóc Trăng'),
(84, 'Trà Vinh'),
(85, 'Ninh Thuận'),
(86, 'Bình Thuận'),
(88, 'Vĩnh Phúc'),
(89, 'Hưng Yên'),
(90, 'Hà Nam'),
(92, 'Quảng Nam'),
(93, 'Bình Phước'),
(94, 'Bạc Liêu'),
(95, 'Hậu Giang'),
(97, 'Bắc Cạn'),
(98, 'Bắc Giang'),
(99, 'Bắc Ninh');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `registrationDate` date DEFAULT NULL,
  `expireDate` date DEFAULT NULL,
  `centreId` varchar(15) DEFAULT NULL,
  `licensePlate` varchar(15) DEFAULT NULL,
  `id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vehicles`
--

CREATE TABLE `vehicles` (
  `licensePlate` varchar(20) NOT NULL DEFAULT '0',
  `brand` varchar(15) DEFAULT NULL,
  `model` varchar(15) DEFAULT NULL,
  `manufactureDate` date DEFAULT NULL,
  `certId` varchar(15) DEFAULT NULL,
  `certDate` date DEFAULT NULL,
  `regionId` int DEFAULT NULL,
  `version` int DEFAULT NULL,
  `usePurpose` varchar(25) DEFAULT NULL,
  `isCompany` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `vehicles`
--

INSERT INTO `vehicles` (`licensePlate`, `brand`, `model`, `manufactureDate`, `certId`, `certDate`, `regionId`, `version`, `usePurpose`, `isCompany`) VALUES
('11A-00001', 'Hyundai', 'Civic', '2008-09-23', 'USWF69H1ZR', '2022-01-15', 11, 7, 'Kinh doanh', 1),
('11A-00002', 'Hyundai', 'Cruze', '2022-09-18', 'HFYJF87QT5', '2022-03-14', 11, 2, 'Chuyển hàng', 1),
('11A-00003', 'Lamborghini', 'Elantra', '2000-08-05', 'HOEBIJNC9V', '2003-08-25', 11, 1, 'Đi làm', 1),
('11A-00004', 'Toyota', 'Elantra', '2008-08-05', 'QRGWNVR33H', '2017-09-19', 11, 6, 'Du lịch', 1),
('11A-00005', 'Aston Martin', 'Camry', '2006-06-15', '32ZHJ2ADOE', '2008-06-05', 11, 9, 'Đi làm', 1),
('11A-00006', 'Chevrolet', 'CX-5', '2013-02-08', 'WJ6IO95G7F', '2017-11-02', 11, 3, 'Đi làm', 1),
('11A-00007', 'Ferrari', 'Ranger', '2020-04-13', 'TKQARUBUB2', '2000-03-20', 11, 4, 'Kinh doanh', 1),
('11A-00008', 'Tesla', 'Ranger', '2002-07-03', 'SYIIUQZ0ME', '2004-03-14', 11, 9, 'Chuyển hàng', 1),
('11A-00009', 'BMV', 'Soul', '2010-05-14', '639D20QFSU', '2009-05-13', 11, 4, 'Du lịch', 1),
('11A-00010', 'Land Rover', 'Civic', '2001-06-07', 'G09R0TO3ZU', '2005-03-19', 11, 5, 'Kinh doanh', 1),
('11A-00011', 'Kia', 'Ranger', '2019-09-05', 'PUWLV8PNVY', '2000-06-10', 11, 7, 'Công vụ', 0),
('11A-00012', 'Nissan', 'Sentra', '2007-12-04', 'GT85GUO72E', '2007-04-19', 11, 3, 'Du lịch', 0),
('11A-00013', 'Land Rover', 'Cruze', '2004-05-02', 'Z9YZTJRWJ7', '2018-12-19', 11, 3, 'Công vụ', 0),
('11A-00014', 'Tesla', 'Sentra', '2011-11-28', '7E3CW17G34', '2014-06-28', 11, 1, 'Đi làm', 0),
('11A-00015', 'Ford', 'Ranger', '2019-05-04', '5D7Q6E7DBP', '2019-01-25', 11, 6, 'Kinh doanh', 0),
('11A-00016', 'Nissan', 'Soul', '2001-02-06', '62C5CEN3VH', '2011-01-03', 11, 5, 'Chuyển hàng', 0),
('11A-00017', 'Lamborghini', 'Camry', '2002-06-18', 'MON8DYGAL0', '2000-07-20', 11, 6, 'Du lịch', 0),
('11A-00018', 'Ferrari', 'Elantra', '2019-07-20', '3GWH0IDQ2N', '2001-04-26', 11, 3, 'Chuyển hàng', 0),
('11A-00019', 'Tesla', 'Sentra', '2017-05-22', 'EOCA2TLBS3', '2002-09-26', 11, 9, 'Kinh doanh', 0),
('11A-00020', 'Hyundai', 'Cruze', '2013-11-02', 'GX2PU1GCP7', '2009-05-09', 11, 1, 'Chuyển hàng', 0),
('12B-00001', 'Nissan', 'CX-5', '2022-11-12', '4ZM3SRGMBC', '2019-07-26', 12, 5, 'Đi học', 0),
('12B-00002', 'Lamborghini', 'Camry', '2013-08-13', 'AZJJH6577A', '2001-12-10', 12, 9, 'Kinh doanh', 0),
('12B-00003', 'Hyundai', 'Civic', '2011-11-18', 'SP523DKWSQ', '2020-05-27', 12, 9, 'Đi làm', 0),
('12B-00004', 'Porsche', 'CX-5', '2017-12-13', 'FQ5BZWA1Y7', '2016-05-14', 12, 7, 'Chuyển hàng', 0),
('12B-00005', 'Audi', 'Soul', '2001-11-22', 'AXJUJP9J4G', '2013-03-10', 12, 3, 'Công vụ', 0),
('12B-00006', 'Mercedes', 'Elantra', '2004-04-08', '9LWKOA330J', '2004-07-23', 12, 10, 'Đi học', 0),
('12B-00007', 'Lexus', 'Elantra', '2000-12-14', 'ETLOI58DPZ', '2002-09-24', 12, 3, 'Đi làm', 0),
('12B-00008', 'Hyundai', 'Elantra', '2010-05-12', '5NQ6P756LQ', '2006-09-02', 12, 9, 'Đi học', 0),
('12B-00009', 'Ferrari', 'Cruze', '2003-01-04', 'M8JRF3SN4R', '2008-04-22', 12, 9, 'Kinh doanh', 0),
('12B-00010', 'Hyundai', 'Soul', '2020-11-07', 'N33HFR0SNE', '2005-02-12', 12, 5, 'Đi học', 0),
('12B-00011', 'Land Rover', 'Civic', '2018-11-24', 'R1LVSHH5G5', '2018-08-24', 12, 6, 'Chuyển hàng', 1),
('12B-00012', 'Mercedes', 'Sentra', '2022-01-08', '7TWOJQJYED', '2014-03-17', 12, 5, 'Công vụ', 1),
('12B-00013', 'Ford', 'Ranger', '2008-02-05', 'QN334ARFGP', '2015-05-06', 12, 10, 'Kinh doanh', 1),
('12B-00014', 'Honda', 'Civic', '2002-07-06', 'B5FS7MUAG0', '2019-09-24', 12, 10, 'Công vụ', 1),
('12B-00015', 'Nissan', 'Cruze', '2004-02-13', 'FK5NH8967Q', '2004-07-03', 12, 7, 'Đi học', 1),
('12B-00016', 'Aston Martin', 'Cruze', '2017-10-03', 'B2RU2AUVLT', '2014-08-27', 12, 9, 'Đi làm', 1),
('12B-00017', 'Chevrolet', 'Camry', '2001-05-07', 'UMCNP2H0HF', '2015-08-18', 12, 9, 'Chuyển hàng', 1),
('12B-00018', 'Toyota', 'Camry', '2004-10-19', 'N113XM2SMZ', '2019-11-28', 12, 1, 'Chuyển hàng', 1),
('12B-00019', 'BMV', 'Civic', '2013-12-28', 'K7HAN01NQR', '2000-09-21', 12, 9, 'Đi làm', 1),
('12B-00020', 'Chevrolet', 'Sentra', '2002-11-01', 'K279X53R0N', '2001-12-06', 12, 8, 'Đi làm', 1),
('14C-00001', 'Chevrolet', 'CX-5', '2013-02-14', '70Y3WAN8CL', '2014-04-05', 14, 8, 'Công vụ', 0),
('14C-00002', 'Lexus', 'Soul', '2014-09-01', 'SWBPEJ94RY', '2018-08-03', 14, 9, 'Chuyển hàng', 0),
('14C-00003', 'Ford', 'Civic', '2002-09-17', '9CIN8B2WN5', '2003-09-02', 14, 3, 'Công vụ', 0),
('14C-00004', 'Lamborghini', 'Ranger', '2022-02-16', 'IH3JL2541Z', '2017-08-07', 14, 8, 'Công vụ', 0),
('14C-00005', 'Kia', 'CX-5', '2004-10-10', 'KV6Q0WLTVG', '2014-01-10', 14, 2, 'Đi làm', 0),
('14C-00006', 'Ford', 'Soul', '2021-11-03', 'QB7QADAQ9N', '2008-12-26', 14, 7, 'Đi làm', 0),
('14C-00007', 'Toyota', 'Elantra', '2022-12-15', 'NJFI1814GH', '2006-12-14', 14, 9, 'Công vụ', 0),
('14C-00008', 'Kia', 'Elantra', '2003-04-27', '9VMI3GIIGD', '2001-04-17', 14, 7, 'Đi học', 0),
('14C-00009', 'Vinfast', 'Sentra', '2008-01-06', 'CLJD915VEX', '2019-03-12', 14, 3, 'Công vụ', 0),
('14C-00010', 'Lexus', 'Sentra', '2013-09-27', 'DXC2ZZ622D', '2020-11-02', 14, 6, 'Đi làm', 0),
('14C-00011', 'Honda', 'Ranger', '2007-11-12', 'S33RVTKKI5', '2006-03-14', 14, 4, 'Đi làm', 1),
('14C-00012', 'Aston Martin', 'Soul', '2013-11-14', 'UZOOJA5YOG', '2022-01-04', 14, 10, 'Du lịch', 1),
('14C-00013', 'Mazda', 'Soul', '2001-06-11', 'MVBT8A3ELR', '2005-08-07', 14, 4, 'Công vụ', 1),
('14C-00014', 'Aston Martin', 'Sentra', '2000-11-16', 'KOCB8SH70D', '2005-12-04', 14, 6, 'Kinh doanh', 1),
('14C-00015', 'Vinfast', 'Ranger', '2005-03-01', 'M974MOI27X', '2019-02-02', 14, 8, 'Công vụ', 1),
('14C-00016', 'Kia', 'Camry', '2008-09-07', 'BL7USAPCOL', '2021-05-05', 14, 2, 'Chuyển hàng', 1),
('14C-00017', 'Land Rover', 'CX-5', '2009-06-20', 'EMLGM9QEOL', '2006-11-14', 14, 8, 'Công vụ', 1),
('14C-00018', 'Porsche', 'Soul', '2002-10-08', 'GJMXV2VQW4', '2011-10-06', 14, 2, 'Công vụ', 1),
('14C-00019', 'Lexus', 'Civic', '2005-06-06', '6R3YM946VF', '2009-10-14', 14, 3, 'Chuyển hàng', 1),
('14C-00020', 'Nissan', 'Elantra', '2019-06-19', 'ZJ322FI50P', '2022-08-13', 14, 2, 'Du lịch', 1),
('15D-00011', 'Honda', 'Camry', '2014-08-26', 'VNK5HN7YNH', '2020-11-26', 15, 1, 'Kinh doanh', 1),
('15D-00012', 'Chevrolet', 'Civic', '2003-08-26', 'YWLG7CT8AA', '2013-09-07', 15, 9, 'Du lịch', 1),
('15D-00013', 'Toyota', 'Civic', '2014-02-24', '6CPF78O25U', '2011-06-20', 15, 2, 'Chuyển hàng', 1),
('15D-00014', 'Tesla', 'Ranger', '2009-07-28', 'IV4S75FOMO', '2006-05-10', 15, 3, 'Đi làm', 1),
('15D-00015', 'Chevrolet', 'Sentra', '2012-04-19', 'AP2EIJ8TUF', '2022-06-26', 15, 6, 'Du lịch', 1),
('15D-00016', 'Nissan', 'Cruze', '2013-01-23', 'FYGUKLJODV', '2007-04-14', 15, 7, 'Đi làm', 1),
('15D-00017', 'Porsche', 'Cruze', '2011-07-18', 'O5CGFJTT0M', '2007-01-14', 15, 3, 'Đi làm', 1),
('15D-00018', 'Honda', 'Sentra', '2015-03-18', '068G04K24G', '2016-06-16', 15, 6, 'Đi làm', 1),
('15D-00019', 'Porsche', 'CX-5', '2004-12-07', 'J02UH0PPP5', '2014-05-25', 15, 8, 'Kinh doanh', 1),
('15D-00020', 'Lexus', 'Elantra', '2021-05-11', '05Y1A91M3Q', '2000-04-06', 15, 1, 'Kinh doanh', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `centre`
--
ALTER TABLE `centre`
  ADD PRIMARY KEY (`centreId`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`ownerId`),
  ADD UNIQUE KEY `ownerId` (`ownerId`);

--
-- Indexes for table `companyvehicle`
--
ALTER TABLE `companyvehicle`
  ADD KEY `ownerId` (`ownerId`),
  ADD KEY `licensePlate` (`licensePlate`);

--
-- Indexes for table `owner`
--
ALTER TABLE `owner`
  ADD PRIMARY KEY (`ownerId`),
  ADD UNIQUE KEY `ownerId` (`ownerId`);

--
-- Indexes for table `ownervehicle`
--
ALTER TABLE `ownervehicle`
  ADD KEY `ownerId` (`ownerId`),
  ADD KEY `licensePlate` (`licensePlate`);

--
-- Indexes for table `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`regionId`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`),
  ADD KEY `centreId` (`centreId`),
  ADD KEY `licensePlate` (`licensePlate`);

--
-- Indexes for table `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`licensePlate`),
  ADD KEY `regionId` (`regionId`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `companyvehicle`
--
ALTER TABLE `companyvehicle`
  ADD CONSTRAINT `companyvehicle_ibfk_1` FOREIGN KEY (`ownerId`) REFERENCES `company` (`ownerId`),
  ADD CONSTRAINT `companyvehicle_ibfk_2` FOREIGN KEY (`licensePlate`) REFERENCES `vehicles` (`licensePlate`);

--
-- Constraints for table `ownervehicle`
--
ALTER TABLE `ownervehicle`
  ADD CONSTRAINT `ownervehicle_ibfk_1` FOREIGN KEY (`ownerId`) REFERENCES `owner` (`ownerId`),
  ADD CONSTRAINT `ownervehicle_ibfk_2` FOREIGN KEY (`licensePlate`) REFERENCES `vehicles` (`licensePlate`);

--
-- Constraints for table `registration`
--
ALTER TABLE `registration`
  ADD CONSTRAINT `registration_ibfk_1` FOREIGN KEY (`licensePlate`) REFERENCES `vehicles` (`licensePlate`),
  ADD CONSTRAINT `registration_ibfk_2` FOREIGN KEY (`centreId`) REFERENCES `centre` (`centreId`);

--
-- Constraints for table `vehicles`
--
ALTER TABLE `vehicles`
  ADD CONSTRAINT `vehicles_ibfk_2` FOREIGN KEY (`regionId`) REFERENCES `region` (`regionId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
