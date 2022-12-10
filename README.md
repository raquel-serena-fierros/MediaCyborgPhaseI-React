# MediaCyborg-PhaseI
Front End Development using React + Tailwind + Vite  for MediaCyborg Startup.


# Step 1 — Creating a Vite Project
In this step, you will create a new React project using the Vite tool from the command line. You will use the yarn package manager to install and run the scripts.

Run the following command in your terminal to scaffold a new Vite project:

yarn create vite
This command will run the Vite executable from the remote npm repository. It will configure the necessary tools to scaffold a React local development environment. Finally, it will open a command-line menu for project settings and language type.

After the script finishes, you will be prompted to enter a project name:

Output
yarn create v1.22.10
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Installed "create-vite@2.9.0" with binaries:
      - create-vite
      - cva
? Project name: » vite-project
Type your project name (this tutorial will use digital-ocean-vite as the example name):

digital-ocean-vite
After entering your project name, Vite will prompt you to select a framework:

Output
? Select a framework: » - Use arrow-keys. Return to submit.
    vanilla
    vue
>   react
    preact
    lit
    svelte
Vite allows you to bootstrap a range of project types, not just React. Currently, it supports React, Preact, Vue, Lit, Svelte, and vanilla JavaScript projects.

Use your keyboard arrow key to select react.

After selecting the React framework, Vite will prompt you to choose the language type. You can use JavaScript or TypeScript to work on your project.

Use your arrow keys to choose react:

Output
? Select a variant: » - Use arrow-keys. Return to submit.
>   react
    react-ts
After setting up the framework, you will see an output that the project has been scaffolded. Vite will then instruct you to install dependencies using Yarn:

Output
Done:
Scaffolding project in path\to\digital-ocean-vite...

Done. Now run:

  cd digital-ocean-vite
  yarn
  yarn dev

Done in 129.89s.
Navigate to your project folder as directed:

cd digital-ocean-vite
Then, use the yarn command to install the dependencies of the project:

yarn
After installing all the dependencies, you will see how long it took to install dependencies:

Output
success Saved lockfile.
You have now set up a new React project using Vite and installed the packages required by React and Vite.

Next, you will start the development server to test the application.

# Step 2 — Starting the Development Server
In this step, you will start the development server to verify that everything is working.

From inside the digital-ocean-vite folder, use the following command to run the development server:

yarn run dev
This command is an alias of the vite command. It will run your project in development mode.

You will see the following output:

Output
 vite v2.9.1 dev server running at:
  > Local: http://localhost:3000/
  > Network: use `--host` to expose
  ready in 910ms.
Next, open your browser and visit http://localhost:3000/.

You will see the standard React project running on port 3000:
