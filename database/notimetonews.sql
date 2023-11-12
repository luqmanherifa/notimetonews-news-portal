-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 05, 2023 at 04:34 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `notimetonews`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(11, '2014_10_12_000000_create_users_table', 1),
(12, '2014_10_12_100000_create_password_resets_table', 1),
(13, '2019_08_19_000000_create_failed_jobs_table', 1),
(14, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(15, '2023_02_01_035517_create_news_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `category` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `description`, `category`, `author`, `created_at`, `updated_at`, `image`) VALUES
(1, 'Corrupti perspiciatis consequatur necessitatibus aliquam.', 'Impedit autem earum et reiciendis esse rerum sapiente. Vero quia itaque et commodi. Repellat ullam suscipit dolore eum et veritatis.', 'Eos consequatur.', 'reichert.malcolm@yahoo.com', '2023-02-01 04:00:13', '2023-02-01 04:00:13', 'https://source.unsplash.com/800x450?car'),
(2, 'Sit adipisci doloribus delectus tenetur animi.', 'Sed qui delectus sunt voluptatum enim at debitis. Eaque atque unde ducimus qui. Nulla officiis commodi consectetur quis.', 'Ea et voluptatem.', 'phoebe53@gerhold.net', '2023-02-01 04:00:13', '2023-02-01 04:00:13', 'https://source.unsplash.com/800x450?rome'),
(3, 'Alias enim officia voluptas.', 'Autem aliquid nihil consequatur architecto error officia esse. Eum aut debitis vel officiis est non. Mollitia quia molestias sit.', 'Laboriosam aut.', 'snader@hodkiewicz.net', '2023-02-01 04:00:13', '2023-02-01 04:00:13', 'https://source.unsplash.com/800x450?russia'),
(4, 'Consectetur est autem sequi voluptatem officia tenetur voluptas.', 'Nesciunt in eos sit voluptatem magni rem reiciendis. Qui occaecati distinctio et rerum. Alias quaerat ut delectus repellat.', 'Accusamus corrupti.', 'ceasar.williamson@kutch.com', '2023-02-01 04:00:13', '2023-02-01 04:00:13', 'https://source.unsplash.com/800x450?tornado'),
(5, 'Et qui accusamus repellendus blanditiis.', 'Aut vel nam excepturi perferendis cumque quod voluptatem. Ut qui autem veritatis fugiat. At sunt nostrum voluptatem corrupti assumenda.', 'Nulla quibusdam.', 'dovie.herman@cronin.info', '2023-02-01 04:00:13', '2023-02-01 04:00:13', 'https://source.unsplash.com/800x450?us'),
(6, 'Hic occaecati magni ut earum doloremque.', 'Id quo quia perspiciatis cupiditate dicta. Qui rerum ducimus sit autem et asperiores sequi ut. Quam est vel cupiditate modi.', 'Amet quia dolor.', 'virgie22@hotmail.com', '2023-02-01 04:00:13', '2023-02-01 04:00:13', 'https://source.unsplash.com/800x450?house'),
(7, 'Est sapiente maiores modi et.', 'Quam et aut inventore sapiente consequuntur enim. Natus et ut quaerat cum delectus.', 'Ut aliquid non et.', 'julia92@yahoo.com', '2023-02-01 04:00:13', '2023-02-01 04:00:13', 'https://source.unsplash.com/800x450?basketball'),
(8, 'Veniam aut est qui ipsam debitis.', 'Ea voluptatem ut et dolores voluptatum fugit omnis. Dicta voluptatibus dolores qui. Ullam nostrum eveniet ut.', 'Quasi quaerat est.', 'betsy.krajcik@fisher.com', '2023-02-01 04:00:13', '2023-02-01 04:00:13', 'https://source.unsplash.com/800x450?shoes'),
(9, 'Enim labore omnis voluptatem est aliquid omnis et.', 'Facere similique dolor quo labore voluptas. Voluptates explicabo voluptas possimus cupiditate ea.', 'Assumenda pariatur.', 'luqmanherifa@gmail.com', '0000-00-00 00:00:00', '2023-02-01 04:00:13', 'https://source.unsplash.com/800x450?japan'),
(10, 'Sunt accusantium omnis officia vitae.', 'Iusto ducimus repellendus alias in. Dolor possimus eveniet consequatur.', 'Voluptas sit libero.', 'marquardt.sheridan@gmail.com', '2023-02-01 04:00:13', '2023-02-01 04:00:13', 'https://source.unsplash.com/800x450?storm'),
(11, 'Ab quod consectetur repellat quam.', 'Natus unde et architecto est. Sunt tenetur facere non laudantium. Omnis dolor cumque quis.', 'Placeat est vitae.', 'dietrich.ryleigh@mayert.com', '2023-02-01 04:00:13', '2023-02-01 04:00:13', 'https://source.unsplash.com/800x450?korea'),
(12, 'Omnis et autem eum quia aperiam cum.', 'Ut hic deserunt dolor tenetur. Natus impedit consequatur porro perferendis molestiae omnis. Suscipit velit laboriosam suscipit nisi enim excepturi quia.', 'Iste nisi sunt illo.', 'iwaelchi@wilderman.biz', '2023-02-01 04:00:13', '2023-02-01 04:00:13', 'https://source.unsplash.com/800x450?food'),
(13, 'Qui quidem quae ipsa sapiente architecto ea.', 'Et id dolorem ducimus voluptatum ad doloribus. Iste voluptas similique aperiam ipsam veritatis nesciunt.', 'Doloribus qui.', 'yasmin23@gottlieb.com', '2023-02-01 04:00:13', '2023-02-01 04:00:13', 'https://source.unsplash.com/800x450?flood'),
(14, 'Voluptas magnam ea aut odio voluptas qui.', 'Esse non rerum quo. Omnis nisi animi sit dolorem error ea. Perspiciatis quasi et quod unde delectus quas maiores.', 'Ea ut beatae.', 'freeman91@rohan.org', '2023-02-01 04:00:13', '2023-02-01 04:00:13', 'https://source.unsplash.com/800x450?war'),
(15, 'Nam sit in reprehenderit voluptatum.', 'Quibusdam ut veniam deserunt mollitia laudantium voluptatem. Voluptatibus nostrum ut enim maiores architecto.', 'Soluta consequatur.', 'jay.paucek@johns.com', '2023-02-01 04:00:13', '2023-02-01 04:00:13', 'https://source.unsplash.com/800x450?badminton'),
(16, 'Hic eos nulla voluptas nostrum iusto et.', 'Sed non repellendus quia reiciendis voluptas pariatur. Ducimus in mollitia fugit neque maxime voluptas possimus.', 'Modi repudiandae.', 'klein.toy@yahoo.com', '2023-02-01 04:00:13', '2023-02-01 04:00:13', 'https://source.unsplash.com/800x450?animal'),
(17, 'Voluptate nihil nisi maiores id.', 'Odit molestias accusamus provident eveniet nobis possimus. Quod rerum maiores distinctio et quaerat assumenda. Laudantium quia vitae vel aliquam et voluptatem.', 'Non aliquam sed ut.', 'armstrong.lynn@mante.com', '2023-02-01 04:00:13', '2023-02-01 04:00:13', 'https://source.unsplash.com/800x450?switzerland'),
(18, 'Harum nam et eligendi est totam.', 'Exercitationem rerum qui consequatur rem ex. Earum repellat et occaecati et et vel voluptatum.', 'Accusamus quia.', 'wswift@hegmann.com', '2023-02-01 04:00:14', '2023-02-01 04:00:14', 'https://source.unsplash.com/800x450?fire'),
(19, 'The giant monoliths found in the desert', 'Out in the hot, shimmering desert sands of western Qatar, something alien, colossal and very weird looms over the horizon. There\'s seemingly no logic to the appearance of four gigantic monoliths stretching out into the distance along a barren corridor between low limestone cliffs. And yet these metallic invaders have made themselves oddly at home in the rough landscape adding a majestic dimension to this corner of the tiny Gulf nation.', 'Travel', 'moran@gmail.com', '2023-02-01 04:00:14', '2023-02-01 04:00:14', 'https://raw.githubusercontent.com/luqmanherifa/notimetonews-news-portal/main/asset/img/news_09.png'),
(20, 'How the metaverse became real estate\'s new frontier', 'The metaverse a growing number of immersive virtual online worlds where users live and play has become a hotbed of real estate speculation. Investors are betting on it being an integral part of a possible paradigm shift in how we use the internet a decentralized version called Web3, which its supporters argue will wrest control of the web from big tech companies and distribute power, privacy and security back to users.', 'Style', 'sherlock@gmail.com', '2023-02-01 04:00:14', '2023-02-01 04:00:14', 'https://raw.githubusercontent.com/luqmanherifa/notimetonews-news-portal/main/asset/img/news_08.png'),
(21, 'Photographer captures the unseen side of Dubai', 'Many photographers choose to illustrate the luxury and scale that Dubai is known for, but Preet Uday shows a different side of the city.', 'Travel', 'adler@gmail.com', '2023-02-01 04:00:14', '2023-02-01 04:00:14', 'https://raw.githubusercontent.com/luqmanherifa/notimetonews-news-portal/main/asset/img/news_07.png'),
(22, 'Mafia boss found working as pizza boss after 16 years on the run', 'Italian anti-Mafia police have arrested another mobster on the run, just two weeks after the sensational arrest on January 16 of Sicilian Cosa Nostra superboss Matteo Messina Denaro at a health clinic in Palermo, Sicily. This time it was Edgardo Greco, 63, who was apprehended in Saint-Etienne, France, where he was working under the alias Paolo Dimitrio as a pizzaiolo – or pizza chef – at the Caffe Rossini Italian restaurant. Greco, associated with the Calabrian ‘Ndrangheta, was convicted in absentia in 1991 for the double homicide of brothers Stefano and Giuseppe Bartolomeo, who he is alleged to have killed with iron bars before dissolving their bodies in acid, according to court documents. He had evaded Italian law enforcement officials since his conviction.', 'Europe', 'lestrade@gmail.com', '2023-02-01 04:00:14', '2023-02-01 04:00:14', 'https://raw.githubusercontent.com/luqmanherifa/notimetonews-news-portal/main/asset/img/news_06.png'),
(23, 'Discovery reveals how ancient Egyptians mummified the dead', 'From the ruins of an embalming workshop, scientists have discovered the substances and concoctions ancient Egyptians used to mummify the dead. While scholars had previously learned the names of substances used to embalm the dead from Egyptian texts, they were — until recently — only able to guess at exactly what compounds and materials they referred to. Now, molecular analysis of residues in pots excavated from a site discovered in 2016 in Saqqara, an ancient burial ground, has revealed some answers. A total of 121 vessels were recovered from the subterranean embalming workshop, which was used in the seventh and sixth century BC. In research published Wednesday in the scientific journal Nature, the scientists based in Germany and Egypt studied organic residues in 31 of the pots that were most clearly labeled.', 'Africa', 'bellinger@gmail.com', '2023-02-01 04:00:14', '2023-02-01 04:00:14', 'https://raw.githubusercontent.com/luqmanherifa/notimetonews-news-portal/main/asset/img/news_05.png'),
(24, 'US Capitol Police ramp up security ahead of Biden\'s State of the Union address', 'US Capitol Police are ramping up security for President Joe Biden’s State of the Union address to Congress next week, including adding a non-scalable fence around the Capitol grounds, according to two sources familiar with the plans. Intelligence officials in the police department warned in an email circulated to the force on Friday that the threat level remains elevated ahead of Biden’s annual address set for Tuesday night. While there are no specific credible threats to the event, the Capitol Police bulletin notes that “recent incidents targeting politicians and law enforcement agencies within the past month indicate that there is a heightened threat toward government officials.”', 'Politics', 'hudson@gmail.com', '2023-02-01 04:00:14', '2023-02-01 04:00:14', 'https://raw.githubusercontent.com/luqmanherifa/notimetonews-news-portal/main/asset/img/news_04.png'),
(25, 'The US city that keeps changing the world', 'There\'s something in the air in Seattle. And while at first sniff you might assume that it\'s coffee, nose a little harder and you\'ll notice that Seattle doesn\'t run on caffeine it runs on innovation. It\'s not for nothing that this city has spawned Microsoft, Amazon, Boeing and Starbucks, for starters. Even Pike Place Market famous today for its tourist count as much as for its stalls for locals was founded in 1907 as a way for farmers to sell produce directly to customers.', 'Travel', 'moriarty@gmail.com', '2023-02-01 04:00:14', '2023-02-01 04:00:14', 'https://raw.githubusercontent.com/luqmanherifa/notimetonews-news-portal/main/asset/img/news_03.png'),
(26, 'Cristiano Ronaldo finally scores his first goal for new club Al Nassr', 'Cristiano Ronaldo will be remembered as one of soccer’s most prolific goalscorers. But, surprisingly for a player who is usually so lethal in front of goal, it has taken the forward longer than many expected for him to find the net with his new club Al Nassr. But on Friday the 37-year-old finally scored his first league goal in his third appearance for the Saudi Arabian side, scoring a late penalty to secure a 2-2 draw at Al Fateh in the Saudi Pro League. Al Nassr was awarded the penalty three minutes into added time and Ronaldo, a five-time Ballon d’Or winner, duly stepped up to convert from the spot.', 'Football', 'mycroft@gmail.com', '2023-02-01 04:00:14', '2023-02-01 04:00:14', 'https://raw.githubusercontent.com/luqmanherifa/notimetonews-news-portal/main/asset/img/news_02.png'),
(27, 'The Asian country where workers haven\'t had a raise in 30 years', 'Like other parts of the world, inflation in Japan has become a major headache. In the year to December, core consumer prices rose 4%. That’s still low by comparison with America or Europe, but represents a 41-year high for Japan, where people are more used to prices going backwards. “In a country where you haven’t had nominal wage growth over 30 years, real wages are declining quite rapidly as a result [of inflation],” Stefan Angrick, a Tokyo-based senior economist at Moody’s Analytics. Last month, Japan recorded its biggest drop in earnings, once inflation is taken into account, in nearly a decade.', 'Business', 'irene@gmail.com', '2023-02-01 04:00:14', '2023-02-01 04:00:14', 'https://raw.githubusercontent.com/luqmanherifa/notimetonews-news-portal/main/asset/img/news_01.png');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'momo', 'momo@gmail.com', NULL, '$2y$10$xL6O8ZKhkxPJZLV71XtEj.n9c4iGJ5fho6lNKBCxqKf06j4IEgIDO', NULL, '2023-02-01 18:34:28', '2023-02-01 18:34:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
