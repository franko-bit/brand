const { describe, it, beforeEach, afterEach } = require("mocha");
const { expect } = require("chai");
const request = require("supertest");
const app = require("../index.js");
const comme = require("../models/comment.js");
const jwt = require("jsonwebtoken");
describe("comments endpoints", () => {
  describe("Read all comment", () => {
    it("Should read comment", async () => {
      const res = await request(app).get("/comment");
      expect(res).to.have.property("status", 200);
    });
    it(" should create comment", async () => {
      const res = await request(app).post("/comment/:_id").send({
        comment: "Red Boss boss boss comment",
      });
      console.log(res.body);
      expect(res).to.have.property("status", 200);
    });
    it(" should delete comment", async () => {
      const comm = await comme.create({
        comment: "Red Boss boss boss comment",
      });
      await comm.save();
      const fakeToken = jwt.sign({}, "secretkey");
      const res = await request(app)
        .delete(`/Deletecomment`)
        .set("Authorization", `Bearer ${fakeToken}`);
      expect(res).to.have.property("status", 200);
    });
  });
});
