CREATE TABLE article (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  summary VARCHAR(500),
  content TEXT NOT NULL,
  posted_at TIMESTAMP WITH TIME ZONE NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL,
  likes INT NOT NULL
);
CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
);
CREATE TABLE category_article (
  id SERIAL PRIMARY KEY,
  article_id int NOT NULL,
  category_id int NOT NULL,
  CONSTRAINT FK_category_article_article_id FOREIGN KEY (article_id) REFERENCES article(id),
  CONSTRAINT FK_category_article_category_id FOREIGN KEY (category_id) REFERENCES category(id),
  UNIQUE (article_id, category_id)
);
CREATE TABLE article_image (
  id SERIAL PRIMARY KEY,
  article_id int NOT NULL,
  image_url text NOT NULL,
);
