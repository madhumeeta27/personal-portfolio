import requests
from fpdf import FPDF
from PIL import Image
import random
from pyfiglet import Figlet
import sys


def main():
    figlet = Figlet()
    figlet.getFonts()
    figlet.setFont(font="starwars")
    print(figlet.renderText("WELCOME TO ASTRO VERSE"))
    print("YOUR ULTIMATE SPACE COMPANION\nChoose any one from the following options\n")

    while True:
        print(
            "1. Calculate you weight on each planet(including sun and moon) of our solar system \n2. Explore the astronomy pic of the day with a detailed explanation\n3. Test your knowledge with our solar system quiz\n4. Exit"
        )
        choice = int(input("Enter your choice:\n"))
        if choice in [1, 2, 3, 4]:
            if choice == 1:
                while True:
                    w = input("Enter your weight:")
                    if isValidWeight(w):
                        while True:
                            planet = input(
                                "Enter the planet (including sun and moon) on which you want to calculate your weight:"
                            )
                            if wp := calculateWeight(int(w), planet):
                                print(
                                    f"The weight on {planet.capitalize()} is {wp:02} Kgs\n"
                                )
                                break
                            else:
                                continue
                        break
                    else:
                        continue

            if choice == 2:
                print("This may take a while depending on your network speed\n")
                title, url, file_name = APOD()
                print("The astronomy pic of the day is", title)
                print("The image with the description is saved as", file_name)
                print("The link for the image is", url, "\n")

            if choice == 3:
                while True:
                    n = input("Enter the number(<=16) of questions: ")
                    if isValidn(n):
                        score = quiz(int(n))
                        if score == 0:
                            print("Sorry, your score is 0\nTRY AGAIN NEXT TIME\n")
                        else:
                            print(f"YOU HAVE SCORED {score}/{n}!\n")
                        break
                    else:
                        continue

            if choice == 4:
                sys.exit("Exiting.....\n")

        else:
            print("Invalid choice\n")
            continue


def calculateWeight(w, planet):
    m = {
        "sun": 27.01,
        "mercury": 0.38,
        "venus": 0.91,
        "mars": 0.38,
        "jupiter": 2.34,
        "saturn": 1.06,
        "uranus": 0.92,
        "neptune": 1.19,
        "pluto": 0.06,
        "moon": 0.166
    }
    if planet.lower() in m:
        wp = w * m[planet.lower()]
        return wp
    else:
        print("Invalid planet")
        return False


def APOD():
    response = requests.get(
        "https://api.nasa.gov/planetary/apod?api_key=MeWOX4zfIHSTnvjJNbUcECha59LKAYnsRhATKnwM"
    )
    data = response.json()
    title = data["title"]
    date = data["date"]
    exp = data["explanation"].replace("’", "")
    img_url = data["url"]
    response = requests.get(img_url)
    with open("apod.jpg", "wb") as file:
        file.write(response.content)
    image = Image.open("apod.jpg")
    image.thumbnail((550, 700))
    image.save("apod.jpg")

    pdf = FPDF(orientation="portrait", format="A4")
    pdf.add_page()
    pdf.set_font("Times", size=5)
    pdf.cell(0, 0.5, text=date)
    pdf.ln(1)
    pdf.set_font("Times", style="B", size=30)
    pdf.cell(0, 8, text=title, align="C")
    pdf.ln(15)

    pdf.image("apod.jpg")
    pdf.ln(5)
    pdf.set_font("Helvetica", style="I", size=10)
    pdf.multi_cell(0, 8, text=exp, align="C")

    pdf.output("apod.pdf")
    return (title, img_url, "apod.pdf")

def quiz(n):
    questions = [
        "Which is the second planet from the sun?",
        "Phobos and Diemos are the moons of which planet in our solar system?",
        "Martian relates to which planet in our solar system?",
        "Titania, Miranda and Bianca are all moons of which planet in our solar system?",
        "Phobos and Deimos are moons of which planet in our solar system?",
        "What is the fifth planet from the sun?",
        "In August 2011 NASA announced that photographic evidence had been captured of possible liquid water of which planet in our solar system?",
        "How many planets are in our solar system have rings?",
        "Which planet lies between Jupiter and Uranus?",
        "Which is the fastest rotating planet in our solar system?",
        "Which planet lies between Saturn and Neptune?",
        "How may moons does the planet Mars have?",
        "How many stars make up Orion’s Belt?",
        "Olympus Mons is the highest mountain on which planet in our solar system?",
        "Io, Europa, Ganymede and Callisto are all moons of which planet in our solar system?",
        "Which is the only planet in our solar system to rotate clockwise?",
        "The Caloris Basin, a large impact crater, is on which planet in our solar system?",
    ]
    answers = [
        "Venus",
        "Mars",
        "Mars",
        "Uranus",
        "Mars",
        "Jupiter",
        "Mars",
        "4",
        "Saturn",
        "Jupiter",
        "Uranus",
        "2",
        "3",
        "Mars",
        "Jupiter",
        "Venus",
        "Mercury",
    ]
    score = 0
    for i in range(n):
        q = random.choice(questions)
        index = questions.index(q)
        a = answers[index]
        ans = input(f"{i+1}. {q}").capitalize()
        if ans == a:
            print("CORRECT")
            score += 1
        else:
            print("WRONG")
            print("The correct answer is", answers[index])
        questions.pop(index)
        answers.pop(index)
    return score


def isValidWeight(w):
    try:
        if int(w) <= 0:
            print("Cannot be equal to or less than zero\nTry again\n")
            return False
        else:
            return True
    except:
        print("Invalid Input\n")
        return False


def isValidn(n):
    try:
        if int(n) <= 0:
            print("Cannot be equal to or less than zero\nTry again\n")
            return False
        elif int(n) > 16:
            print("Exceeded limit\n")
            return False
        else:
            return True
    except:
        print("Invalid Input\n")
        return False


if __name__ == "__main__":
    main()