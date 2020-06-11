import { expect } from "chai";
import { driver, WebDriver } from "mocha-webdriver";
import { Key } from "selenium-webdriver";

describe("testChangePassword", function () {
  it("should be relogged", async function () {
    this.timeout(20000);
    await login(driver);
    expect(await driver.find("body > p").getText()).to.include("test");
    await driver.find("body > a").click();
    await driver.find("#username").sendKeys("test");
    await driver.find("#password").sendKeys("test");
    await driver.find("#new-password").sendKeys("test");
    await (
      await driver.find("body > form > input[type=submit]:nth-child(11)")
    ).click();
    expect(
      await (
        await driver.find("body > form > input[type=submit]:nth-child(11)")
      ).getAttribute("value")
    ).to.include("Zaloguj");
  });
});

describe("testTryingToSolveQuizMultipleTimes", function () {
  it("should be not possible", async function () {
    this.timeout(20000);
    await login(driver);

    await driver
      .find(
        "#quizes > div:nth-child(2) > div.col-4.d-flex.justify-content-center.align-items-center"
      )
      .click();
    expect(await isDialogPresent(driver)).to.equal(false);
    await driver.find("#answer").click();
    for (let i = 0; i < 4; i++) {
      await driver.sendKeys("1");
      await driver.sendKeys(Key.ENTER);
    }

    const saveBtn = await driver.findWait("#save-with-stats", 2000);

    //wait for possible error while fetching data
    await new Promise((resolve) => setTimeout(resolve, 500));
    await driver.sendKeys(Key.ENTER);
    await driver.sendKeys(Key.ENTER);

    await saveBtn.doClick();
    await (
      await driver.findWait(
        "#quizes > div:nth-child(2) > div.col-4.d-flex.justify-content-center.align-items-center",
        2000
      )
    ).click();
    expect(await isDialogPresent(driver)).to.equal(true);
  });
});

async function login(driver: WebDriver) {
  await driver.get("http://localhost:3000");

  await driver.find("#username").sendKeys("test");
  await driver.find("#password").sendKeys("test");
  await driver.find("body > form > input[type=submit]:nth-child(11)").doClick();
  expect(await driver.find("body > p").getText()).to.include("test");
}

async function isDialogPresent(driver: WebDriver): Promise<boolean> {
  try {
    await driver.getTitle();
    return false;
  } catch (_) {
    // Modal dialog showed
    return true;
  }
}
