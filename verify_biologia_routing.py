from playwright.sync_api import sync_playwright, expect
import time

def verify_biologia():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Give the server a few seconds to boot up and be ready
        time.sleep(2)

        # Go to Biology theory page
        page.goto("http://localhost:3000/theory/biologia")
        page.wait_for_load_state("networkidle")

        # Expect to see Działy tematyczne
        expect(page.get_by_role("heading", name="Działy tematyczne")).to_be_visible()

        # Find the Metabolizm link card
        metabolizm_link = page.locator("a.textbook-welcome__domain-btn", has_text="Metabolizm")
        expect(metabolizm_link).to_be_visible()

        # Take a screenshot before clicking
        page.screenshot(path="/home/jules/verification/biologia-domains.png")

        # Click the link
        metabolizm_link.click()

        # It should navigate to /theory/biologia and internally display metabolizm content
        # Check if the title changes to something specific or wait for navigation
        page.wait_for_load_state("networkidle")

        # Take a screenshot after clicking
        page.screenshot(path="/home/jules/verification/biologia-metabolizm.png")

        # Close
        browser.close()

if __name__ == "__main__":
    verify_biologia()
