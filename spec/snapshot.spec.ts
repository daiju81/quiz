import path from 'path'

describe('スナップショットテスト', () => {
  beforeEach(async () => {
    await page.goto('file://' + path.resolve(__dirname, '../index_mock.html'))
  })

  it('HTML/スナップショットテスト', async () => {
    await page.waitForSelector('body', { visible: true })
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
