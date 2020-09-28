const { describe, it, beforeEach, afterEach } = require("mocha");
const { expect } = require("chai");
const request = require("supertest");
const app = require("../index.js");
const jwt = require("jsonwebtoken");
const queries = require("../models/modelQueries.js");
describe("queries endpoints", () => {
  const fakeToken = jwt.sign({}, "secretkey");
  describe("Read all queries", () => {
    it("should be require token", async () => {
      const res = await request(app).get("/queries");

      expect(res).to.have.property("status", 403);
    });
    it("it should return queries", async () => {
      const res = await request(app)
        .get("/queries")
        .set("Authorization", `Bearer ${fakeToken}`);

      expect(res).to.have.property("status", 200);
    });
    it("it should return one blog", async () => {
      const query = await queries.create({
        fname: "Red Boss",
        Email: " red67@gmail.com",
        phone: "078567483",
        subject: "BOSS is coming",
        message: "at processTicksAndRejections",
      });
      await query.save();
      const res = await request(app).get(`/query/${query._id}`);
      expect(res).to.have.property("status", 200);
    });

    it(" should create query", async () => {
      const res = await request(app)
        .post("/create_queries")
        .send({
          fname: "Red Boss",
          Email: " red67@gmail.com",
          phone: "078567483",
          subject: "BOSS is coming",
          message: "at processTicksAndRejections",
        })
        .set("Authorization", `Bearer ${fakeToken}`);

      expect(res).to.have.property("status", 200);
    });
  });
});
