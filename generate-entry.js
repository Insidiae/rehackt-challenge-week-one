const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")

const entryNames = fs
  .readdirSync("./src/entries", { withFileTypes: true })
  .filter((file) => file.isDirectory())
  .map((file) => file.name)

const questions = [
  {
    type: "input",
    name: "title",
    message: "Title of your work",
    validate(value) {
      if (value.length <= 255) {
        return true
      }

      return "Your title must be less than 255 characters"
    },
  },
  {
    type: "input",
    name: "slug",
    message: "Component name",
    validate(value) {
      if (value.length > 64) {
        return "Component name must not exceed 64 characters"
      }

      if (!value.match(/^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/)) {
        return "Component name must be in PascalCase"
      }

      if (entryNames.find((name) => name === value)) {
        return "Component name already used. Open src/entries to view all used component names."
      }

      return true
    },
  },
  {
    type: "input",
    name: "description",
    message: "Describe what you're making (optional)",
    validate(value) {
      if (value.length <= 516) {
        return true
      }

      return "Your description must be less than 516 characters"
    },
  },
  {
    type: "input",
    name: "author",
    message: "Author (you can use any alias if you want)",
    validate(value) {
      if (value) {
        return true
      }

      return "Author must not be empty."
    },
  },
  {
    type: "input",
    name: "email",
    message: "Your email address (optional)",
    validate(value) {
      const pass =
        !value ||
        value.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )

      if (pass) {
        return true
      }

      return "Please enter a valid email address"
    },
  },
  {
    type: "input",
    name: "linkedIn",
    message: "Your LinkedIn profile (optional)",
  },
  {
    type: "input",
    name: "website",
    message: "Your website (optional)",
  },
  {
    type: "confirm",
    name: "confirm",
    message: "Is everything correct?",
  },
]

async function main() {
  console.log("Create your entry for the Rehackt Challenge")

  const answers = await inquirer.prompt(questions)
  // TODO: Remove comment
  // const answers = {
  //   slug: "TestEntry",
  //   title: "Sample Entry",
  //   description:
  //     "This entry was inspired by my great great great granduncle who was a veteran of the Star Wars.",
  //   author: "Juan dela Cruz",
  //   email: "juandc@gmail.com",
  //   linkedIn: "https://www.linkedin.com/in/juan-dela-cruz-b40a1b97/",
  //   website: "juandc.ph",
  // }

  console.log("\nCreating component...")

  const componentDirPath = path.resolve(
    __dirname,
    `src/entries/${answers.slug}`
  )

  fs.mkdir(componentDirPath, (err) => {
    if (err) {
      return console.error(err)
    }
  })

  // TODO: Add jsx template that uses <BaseEntry />
  await fs.writeFile(`${componentDirPath}/${answers.slug}.jsx`, "", (err) => {
    if (err) {
      return console.error(err)
    }
  })

  console.log("Adding your entry...")

  // TODO: Add entry info at entries/index.js

  console.log("\nDONE")

  const componentPath = path.resolve(
    __dirname,
    `src/entries/${answers.slug}/${answers.slug}.jsx`
  )

  const entriesPath = path.resolve(__dirname, "src/entries/index.js")

  console.log(`You can now edit your component at ${componentPath}`)
  console.log(`You can update your entry details anytime at ${entriesPath}`)
}

main()
