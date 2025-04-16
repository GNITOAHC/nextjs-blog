export type ProjectType = {
  title: string
  content: string
  type: 'GitHub' | 'Standard'
  url: string
  // For GitHub projects
  api?: string
  // For Standard projects
  description?: string
  topics?: string[]
  languages?: string[]
}

const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN as string
export const getApiContent = async (url: string) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + GITHUB_ACCESS_TOKEN },
    cache: 'no-store',
  })

  if (!res.ok) {
    console.log(`Error fetching data from ${url}:`, res.status, res.statusText)
    return null
  }

  const data = await res.json()
  return data
}

export const getColor = (lang: string) => {
  switch (lang) {
    case 'Rust':
      return 'bg-[#dea584]'
    case 'TypeScript':
      return 'bg-[#2b7489]'
    case 'JavaScript':
      return 'bg-[#f1e05a]'
    case 'Go':
      return 'bg-[#00ADD8]'
    case 'C++':
      return 'bg-[#f34b7d]'
    case 'ShaderLab':
      return 'bg-[#222c37]'
    case 'HTML':
      return 'bg-[#e34c26]'
    case 'Lua':
      return 'bg-[#000080]'
    case 'Python':
      return 'bg-[#3572A5]'
    case 'Shell':
      return 'bg-[#89e051]'
  }
}

export const getProjects = (): ProjectType[] => {
  return [
    {
      title: 'Cache-Augmented Generation',
      content:
        'Cache-Augmented Generation: A Simple, Efficient Alternative to RAG',
      type: 'Standard',
      url: 'https://github.com/hhhuang/CAG',
      description:
        'Cache-Augmented Generation: A Simple, Efficient Alternative to RAG',
      topics: ['NLP', 'CAG', 'RAG', 'LLM'],
      languages: ['Python', 'Shell'],
    },
    {
      title: 'lsmanager',
      content:
        'A language server manager built in Rust. Inspired by <a href="https://github.com/williamboman/mason.nvim">mason.nvim</a>.',
      type: 'GitHub',
      url: 'https://github.com/GNITOAHC/lsmanager',
      api: 'https://api.github.com/repos/gnitoahc/lsmanager',
    },
    {
      title: 'CitizenMedia',
      content:
        'A platform dedicated to fostering transparency and democratic engagement in Taiwan. \
        Built with NextJs for the frontend and microservices architecture for the backend, employs technologies such as ExpressJs, Nginx, Golang, and gRPC, etc.',
      type: 'Standard',
      url: 'https://github.com/CitizenMedia-TW',
      description: 'A platform for citizen journalists to publish their work.',
      topics: ['NextJs', 'ExpressJs', 'TypeScript', 'Golang', 'gRPC'],
      languages: ['TypeScript', 'Go'],
    },
    {
      title: 'DigitalAnnealer',
      content:
        'A digital annealer built with C++. Support traditional simulated annealing and simulated quantum annealing. Please refer to the README for more details.',
      type: 'GitHub',
      url: 'https://github.com/gnitoahc/digitalannealer',
      api: 'https://api.github.com/repos/gnitoahc/digitalannealer',
    },
    {
      title: '.dotfiles',
      content:
        'My personal dotfiles, including configurations for neovim, fish shell, powershell, tmux, etc.',
      type: 'GitHub',
      url: 'https://github.com/gnitoahc/.dotfiles',
      api: 'https://api.github.com/repos/gnitoahc/.dotfiles',
    },
    {
      title: 'LeetCode',
      content:
        'My solutions to LeetCode problems, currently hosting on <a href="https://leet.chaoting.xyz/">leet.chaoting.xyz</a> powered by Gitbook.',
      type: 'GitHub',
      url: 'https://github.com/gnitoahc/leetcode',
      api: 'https://api.github.com/repos/gnitoahc/leetcode',
    },
    {
      title: 'mermaid-gpt',
      content:
        'An innovative approach to the creation of information graphics, where the accuracy of content and aesthetic appeal are of paramount importance.',
      type: 'GitHub',
      url: 'https://github.com/gnitoahc/mermaid-gpt',
      api: 'https://api.github.com/repos/gnitoahc/mermaid-gpt',
    },
    {
      title: '2023CSCamp',
      content:
        'A tutorial of <a href="https://unity.com/">Unity3D</a> for beginners. \
        The demo is hosted on <a href="https://chaoting.itch.io/2023cscamp">itch.io</a> \
        and the slide is hosted by <a href="https://gnitoahc.github.io/2023CSCamp/">GitHub Pages.</a>',
      type: 'GitHub',
      url: 'https://github.com/gnitoahc/2023CSCamp',
      api: 'https://api.github.com/repos/gnitoahc/2023CSCamp',
    },
    {
      title: 'DBMS-2023',
      content: 'Final project of the course Database Management System.',
      type: 'GitHub',
      url: 'https://github.com/gnitoahc/DBMS-2023',
      api: 'https://api.github.com/repos/gnitoahc/DBMS-2023',
    },
  ]
}
