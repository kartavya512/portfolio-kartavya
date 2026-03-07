'use client';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.worldvectorlogo.com/logos/next-js.svg' },
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'Tailwind CSS', icon: 'data:image/png;base64,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' },
        { name: 'SAP UI5 / Fiori', icon: 'https://cdn.worldvectorlogo.com/logos/sap-1.svg' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
        { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'REST APIs', icon: 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png' }
      ]
    },
    {
      title: 'AI & GenAI',
      skills: [
        { name: 'LLMs (OpenAI, Gemini)', icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png' },
        { name: 'LangChain', icon: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4' },
        { name: 'LangGraph', icon: 'https://avatars.githubusercontent.com/u/145610239?s=200&v=4' },
        { name: 'Prompt Engineering', icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png' },
        { name: 'AI Agent Workflows', icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png' }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git / GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
        { name: 'Shopify', icon: 'data:image/png;base64,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' }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <div className=" text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Technical Skills
          </h2>
          <p className="text-gray-600 text-lg">
            Technologies and tools I work with to build modern applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-md"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-5 h-5 object-contain"
                    />
                    <span className="text-sm text-gray-700">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
