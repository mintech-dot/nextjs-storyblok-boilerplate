# Next.js + Storyblok Boilerplate

A starter boilerplate for building projects with **Next.js 15** and **Storyblok**. This setup provides a clean foundation to develop content-rich applications with the latest Next.js features and the flexibility of the Storyblok CMS.



## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 
- [Storyblok Account](https://www.storyblok.com/) with an API key

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/nextjs15-storyblok-boilerplate.git
   cd nextjs-storyblok-boilerplate
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   copy `.env.example` to `.env` and fill in the required values:
   ```
   STORYBLOK_TOKEN=your-storyblok-access-token
   STORYBLOK_OAUTH_TOKEN=your-storyblok-oauth-token
   STORYBLOK_SPACE_ID=your-storyblok-space-id
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

   Your application should now be running on [https://localhost:3000](https://localhost:3000).

### Storyblok Commands

- **Pull Components**:
  ```bash
  "storyblok:pull-components": "dotenv -- storyblok pull-components --space $STORYBLOK_SPACE_ID"
  ```

- **Migrate Components**:
  ```bash
  "storyblok:migrate": "dotenv -- cross-var storyblok login --token %STORYBLOK_OAUTH_TOKEN% && dotenv -- cross-var storyblok push-components ./src/storyblok/components.json --space %STORYBLOK_SPACE_ID% && storyblok logout"
  ```

- **Generate TypeScript Types**:
  ```bash
  "storyblok:generate-types": "storyblok generate-typescript-typedefs --sourceFilePaths ./src/storyblok/components.json --destinationFilePath ./component-types-sb.d.ts"
  ```


### Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Storyblok Documentation](https://www.storyblok.com/docs)
- [React-i18next documentation](https://react.i18next.com/)

## License

This project is licensed under the MIT License.
