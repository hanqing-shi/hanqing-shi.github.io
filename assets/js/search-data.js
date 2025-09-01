// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A comprehensive overview of my projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-least-squares",
        
          title: "Least Squares",
        
        description: "Least squares and the ways to solve it.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/linear-algebra-note-1/";
          
        },
      },{id: "post-covariance",
        
          title: "Covariance",
        
        description: "A simple interpretation about covariance.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/statistics-note-3/";
          
        },
      },{id: "post-statistical-inference",
        
          title: "Statistical Inference",
        
        description: "Key concepts in statistical inference.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/statistics-note-2/";
          
        },
      },{id: "post-statistics-101",
        
          title: "Statistics 101",
        
        description: "An illustration of the big picture as well as common concepts and distributions in statistics.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/statistics-note-1/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-image-super-resolution",
          title: 'Image Super-Resolution',
          description: "Super-resolution weighting method with meta-Learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/imagesr/";
            },},{id: "projects-robot-simulation-and-vla-model",
          title: 'Robot Simulation and VLA model',
          description: "We constructed a manipulation task in Isaac Sim simulator and trained the model.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/isaacsim/";
            },},{id: "projects-6-dof-robotic-arm-sorting",
          title: '6-DOF Robotic Arm Sorting',
          description: "Pick and place for target darts.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sorting/";
            },},{id: "projects-target-tracking",
          title: 'Target Tracking',
          description: "A two-DOF laser workbench tracking moving targets.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/target_tracking/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%61%6E%71%69%6E%67_%73%68%69@%62%65%72%6B%65%6C%65%79.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/hanqing-shi2002", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
