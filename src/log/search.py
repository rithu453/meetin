from playwright.sync_api import sync_playwright

def inp(roll_no: str):
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()
        page.goto(url="https://spectra-beta.vercel.app/search",wait_until='networkidle')
        page.locator('//html/body/div/div/div[2]/div/span/span/input').fill(roll_no)
        page.wait_for_load_state('networkidle')
        page.locator('//html/body/div/div/div[3]/div/div/div[1]').click()
        page.wait_for_timeout(30000)

inp('22bd1a0581')