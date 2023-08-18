# tech_blogs_r_us


This command-line application allows freelance web developers to generate simple logos for their projects without the need to hire a graphic designer. With this tool, you can quickly create customized logos by specifying text, colors, and shapes. The application generates an SVG file that matches your criteria and provides you with the necessary files for your branding needs.

## User Story

As a freelance web developer, I often require logos for my projects. Instead of hiring a graphic designer, I want to be able to generate simple logos myself. This tool allows me to input text, choose colors, and select a shape to create a customized logo for my projects.

## Acceptance Criteria

- **Input Prompt: Text**
  When prompted, the user can enter up to three characters that will be part of the logo.

- **Input Prompt: Text Color**
  The user can enter a color keyword or a hexadecimal number to specify the color of the text in the logo.

- **Input Prompt: Shape**
  The user is presented with a list of shapes to choose from: circle, triangle, and square. They can select one of these shapes to be part of the logo.

- **Input Prompt: Shape Color**
  Similar to the text color prompt, the user can enter a color keyword or a hexadecimal number to specify the color of the chosen shape in the logo.

- **File Creation**
  Once the user has provided input for all prompts, the application creates an SVG file named `logo.svg`. This file contains the generated logo based on the user's selections.

- **Command Line Output**
  After the SVG file is generated, the application prints the message "Generated logo.svg" in the command line.

- **Visualization**
  Opening the `logo.svg` file in a browser displays a 300x200 pixel image that corresponds to the user's chosen criteria, including the specified text, text color, shape, and shape color.

## How to Use

1. Run the application in a command-line environment.
2. Follow the prompts to input your desired text, text color, shape, and shape color.
3. After entering all the necessary information, an SVG file named `logo.svg` will be generated.
4. Check the command line for the message "Generated logo.svg."
5. Open the `logo.svg` file in a web browser to view and use your generated logo.

## Dependencies

This application requires a compatible command-line environment to run. No additional libraries or packages are needed.

## Notes

- The application is designed to create simple logos that fit the specified criteria. For more complex logo needs, a professional graphic designer might still be necessary.
- The generated logos are in SVG format, providing scalability without loss of quality.
- Be mindful of your color selections to ensure the logo's readability and visual appeal.

## License

This application is available under the [MIT License](LICENSE).

---

Feel free to reach out if you have any questions, suggestions, or improvements for this tool. Happy logo generating!
