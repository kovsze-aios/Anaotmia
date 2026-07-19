from playwright.sync_api import sync_playwright, expect
import time

def verify_biologia():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Catch console logs
        page.on("console", lambda msg: print(f"Browser console: {msg.text}"))

        time.sleep(2)

        page.goto("http://localhost:3000/theory/biologia")
        page.wait_for_load_state("networkidle")

        metabolizm_link = page.locator("a.textbook-welcome__domain-btn", has_text="Metabolizm")
        metabolizm_link.click()

        page.wait_for_load_state("networkidle")
        time.sleep(1) # Extra wait just in case

        # Take a screenshot after clicking
        page.screenshot(path="/home/jules/verification/biologia-metabolizm-debug.png")

        browser.close()

if __name__ == "__main__":
    verify_biologia()
