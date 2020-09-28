const { describe, it, beforeEach, afterEach } = require("mocha");
const { expect } = require("chai");
const request = require("supertest");
const app = require("../index.js");
const jwt = require("jsonwebtoken");
const Article = require("../models/modelArticle.js");
const path = require("path");
const getArticles = () => {
  beforeEach(async () => {
    await Article.deleteMany({});
  });
  afterEach(async () => {
    await Article.deleteMany({});
  });
  it("should return 200 status  if article fetcher successfully", async () => {
    article.collection.insertMany([
      {
        title: " My style",
        photo: "images.jpg",
        article: "My style is back to fashion",
      },
    ]);
  });
};
describe("blog endpoints", () => {
  beforeEach(async () => {
    await Article.deleteMany({});
  });
  afterEach(async () => {
    await Article.deleteMany({});
  });
  const fakeToken = jwt.sign({}, "secretkey");
  describe("Read all blog", () => {
    it("it should return blogs", async () => {
      const res = await request(app).get("/blogs");
      expect(res).to.have.property("status", 200);
    });
    it(" should create blog", async () => {
      const res = await request(app)
        .post("/blog")
        .attach("photo", path.join(__dirname, "./asset/pic.jpeg"))
        .field("title", "test")
        .field("article", "This is probably not a problem with npm")
        .set("Authorization", `Bearer ${fakeToken}`);

      expect(res).to.have.property("status", 201);
    });
    it("it should return one blog", async () => {
      const blogg = await Article.create({
        photo: "879.jpg",
        title: " Boss",
        article: " For async tests and hooks, ensure",
      });
      await blogg.save();
      const res = await request(app).get(`/blog/${blogg._id}`);
      expect(res).to.have.property("status", 200);
    });
    it(" should delete blog", async () => {
      const blog = await Article.create({
        photo: "879.jpg",
        title: " Boss",
        article: " For async tests and hooks, ensure",
      });
      await blog.save();
      const res = await request(app)
        .delete(`/delete_blog/${blog._id}`)
        .set("Authorization", `Bearer ${fakeToken}`);
      expect(res).to.have.property("status", 200);
    });
    it(" should update blog", async () => {
      const blog = await Article.create({
        photo: "879.jpg",
        title: " poorBoy",
        article: " For async tests and hooks, ensure",
      });
      await blog.save();
      const res = await request(app)
        .patch(`/update_blog/${blog._id}`)
        .send({ title: "Rich" })
        .set("Authorization", `Bearer ${fakeToken}`);
      console.log(res.body);
      expect(res).to.have.property("status", 200);
    });
  });
});
module.exports = getArticles;
