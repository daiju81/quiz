const path = require('path')

const { toMatchImageSnapshot } = require("jest-image-snapshot");
expect.extend({ toMatchImageSnapshot });

describe("ビジュアルテスト", () => {
  beforeEach(async () => {
    await page.goto("file://" + path.resolve(__dirname, "../index_mock.html"));
  });

  it("HTML/CSSを含めた見た目が正しい", async() => {
    await page.waitForSelector("body", { visible: true });
    expect(await page.screenshot()).toMatchImageSnapshot();
  });
});

