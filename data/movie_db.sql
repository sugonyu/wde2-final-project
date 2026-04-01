create database webdev_moviedatabase;
use webdev_moviedatabase;
create table movies (
	id int primary key auto_increment,
	title varchar(120) not null,
    genre varchar(120),
    director varchar(120),
    actors varchar(120),
    description text,
    poster text,
    trailer text
);

insert into movies (title, genre, director, actors, description, poster, trailer)
values
(
'Peaky Blinder: The Immortal Man', 
'Action/Drama', 
'Tom Harper', 
' Cilian Murphy, Rebecca Ferguson, Barry Keoghan', 
'A Gripping tale of Power, Loyalty, and a man who seems Untouchable', 
'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Peaky_Blinders_-_The_Immortal_Man_poster.jpg/250px-Peaky_Blinders_-_The_Immortal_Man_poster.jpg', 
'https://www.youtube.com/watch?v=lcvUGs3xaDM'
),

(
'War Machine', 
'Sci-Fi/Action', 
'Patrick Hughe', 
'Alan Ritchson, Dennis Quaid, Stephen James', 
'A High Octane - Saga where Strategy Firepower and survival collide.', 
'https://upload.wikimedia.org/wikipedia/en/thumb/2/22/War_Machine_poster.jpeg/250px-War_Machine_poster.jpeg', 
'https://www.youtube.com/watch?v=AFuE1LRxm80'
),

(
'A Private Life', 
'Mystery/Crime', 
'Rebecca Zlotowlski', 
'Jodie Foster, Daniel Auteuil', 'A Quiet intimate story where hidden truths and personal struggles unfold behind closed doors.', 
'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/A_Private_Life_poster.jpg/250px-A_Private_Life_poster.jpg', 
'https://www.youtube.com/watch?v=HbIEbJbEpF4'
),

(
'My Neighbor Totoro', 
'Animation/Family', 
'Hayao Miyazaki', 
'Hitoshi Takagi, Noriko Hidaka, Chika Sakamoto', 
'When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.', 
'https://m.media-amazon.com/images/M/MV5BYWM3MDE3YjEtMzIzZC00ODE5LTgxNTItNmUyMTBkM2M2NmNiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 
'https://youtu.be/HaLISMAGdOE?si=qqpSkja8Lf8_mf49'
),

(
'Jaws', 
'Monster Horror/Thriller', 
'Steven Spielberg', 
'Roy Scheider, Robert Shaw, Richard Dreyfuss', 
'When a massive killer shark unleashes chaos on a beach community off Long Island, its up to the local police chief, a marine biologist, and an old seafarer to hunt the beast down.', 
'https://static.wikia.nocookie.net/jaws/images/d/da/Jaws-movie-poster.jpg/revision/latest/scale-to-width-down/1200?cb=20131015071208', 
'https://youtu.be/U1fu_sA7XhE?si=ZtFPHHGMCImQXvC3'
),

(
'Up', 
'Animation/Coming-of-Age/Adventure', 
'Pete Docter, Bob Peterson', 
'Edward Asner, Jordan Nagai, John Ratzenberger', 
'78-year-old Carl Fredricksen travels to South America in his house equipped with balloons, inadvertently taking a young stowaway', 
'https://m.media-amazon.com/images/I/71MRrvu3zPL.jpg', 
'https://youtu.be/HWEW_qTLSEE?si=QW6pNuCKkHSKIvvs'
),

(
'The Shawshank Redemption', 
'Drama', 
'Frank Darabont', 
'Tim Robbins, Morgan Freeman', 
'A powerful prison drama about hope, friendship, and resilience. It is widely considered one of the greatest films ever made.', 
'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTRQY22fAfc4eI-8Fpg12E7d7O68wz0uqJvXHunh8l3Xbg1T6Np', 
'https://www.youtube.com/watch?v=NmzuHjWmXOc'
),

(
'Parasite', 
'Thriller/Drama', 
'Bong Joon-ho', 
'Song Kang-ho, Choi Woo-shik, Park So-dam', 
'A Korean masterpiece that explores class inequality through a suspenseful and unpredictable story. It became a global hit and won multiple Academy Awards.', 
'https://img.rgstatic.com/content/movie/c03f0e9b-aca0-467b-8137-39e5b92d33fa/poster-342.webp', 
'https://www.youtube.com/watch?v=5xH0HfJHsaY'
),

(
'The Social Network', 
'Biography/Drama', 
'David Fincher', 
'Jesse Eisenberg, Andrew Garfield', 
'A sharp and fast-paced film about the founding of Facebook, ambition, coding culture, and the cost of success.', 
'https://m.media-amazon.com/images/S/pv-target-images/ea4f1c75ddd9fd937a77875d48f9ce8225ed954afcefabe7a2195311b1a97ddd.jpg', 
'https://www.youtube.com/watch?v=lB95KLmpLR4'
);