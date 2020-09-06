import path from 'path'

describe('スタブを使用したE2Eテスト', () => {
  beforeEach(async () => {
    await page.goto('file://' + path.resolve(__dirname, '../index_mock.html'))
  })
  
  it('question', async () => {
    await page.waitForSelector('#question', { visible: true })
    await expect(page).toMatchElement('#question', {
      text: 'question',
    })
  })

  it('q1', async () => {
    await page.waitForSelector('#q1', { visible: true })
    await expect(page).toMatchElement('#q1', {
      text: 'q1',
    })
  })

  it('q2', async () => {
    await page.waitForSelector('#q2', { visible: true })
    await expect(page).toMatchElement('#q2', {
      text: 'q2',
    })
  })

  it('q3', async () => {
    await page.waitForSelector('#q3', { visible: true })
    await expect(page).toMatchElement('#q3', {
      text: 'q3',
    })
  })

  it('replay', async () => {
    await page.waitForSelector('a', { visible: true })
    await expect(page).toMatchElement('a', {
      text: 'Replay',
    })
  })

  it('ボタン', async () => {
    await page.waitForSelector('#btn', { visible: true })
    await expect(page).toMatchElement('#btn', {
      text: 'Next',
    })
  })

})
