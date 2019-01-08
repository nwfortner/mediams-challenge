# mediams-challenge
For this challenge you will need:
* Node JS
* Docker
* Fastify
* Mongo DB

To start containers: `docker-compose -f docker-compose.yml up`

This will start required containers and import data into mongo db.

Access app: http://localhost:3000

Overview:
Using rest container provide a route to retrieve an article list from MongoDB.

Allow following parameters
* limit of articles to be returned, default 24
* pagination
* sorting, default sort `published_date desc`
* exclude articles without images

`GET /articles`

`JSON Response Status 200`

```
{
  page: 1,
  limit: 24,
  from: 1,
  to: 24,
  total_items: 500,
  total_pages: 20,
  articles: [
    {
        "_id": "www.example.com/12002774/how-to-get-rid-of-the-white-powder-residue-on-plastic-utensils",
        "tags": [
          "Bathroom",
          "Cleaning"
        ],
        "id": "www.example.com/12002774/how-to-get-rid-of-the-white-powder-residue-on-plastic-utensils",
        "title": "How to Get Rid of the White Powder Residue on Plastic Utensils",
        "slug": "/12002774/how-to-get-rid-of-the-white-powder-residue-on-plastic-utensils",
        "writer": "Charl J",
        "image": {
          "url": "http://s3.amazonaws.com/cme_public_images/example/i.example.com/images/a07/n9/51/rid-powder-residue-plastic-utensils-800x800.jpg"
        },
        "category": "Home Hacks & Answers",
        "summary": "If you notice a white powdery residue on plastic utensils, the culprit probably is one of two possibilities. If the utensils are brand new, the residue may be some substance left over from the manufacturing process. If you've been washing the plastic utensils, the residue likely is a result of...",
        "published_date": "2011-03-24T13:14:00.000Z"
      },
      {
        "_id": "www.example.com/13427439/when-to-fertilize-bell-pepper-plants",
        "tags": [
          "Garden",
          "Lawn",
          "Outdoors",
          "Plants",
          "Summer"
        ],
        "id": "www.example.com/13427439/when-to-fertilize-bell-pepper-plants",
        "title": "When to Fertilize Bell Pepper Plants?",
        "slug": "/13427439/when-to-fertilize-bell-pepper-plants",
        "writer": "An Aron",
        "image": {},
        "category": "Home Hacks & Answers",
        "summary": "Dozens of bell pepper varieties in an array of colors can be grown in your home vegetable garden each summer. Bell peppers can can grow in all U.S. Department of Agriculture hardiness zones and tolerate a variety of climatic conditions. However, because they are a warm-season vegetable, they do...",
        "published_date": "2011-03-11T01:06:27.000Z"
      }
  ]
}
```

Create `Pull Request` whith your solution.
