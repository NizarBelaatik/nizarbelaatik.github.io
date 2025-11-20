const getProjectImages = (projectFolder) => {
  try {
    const modules = import.meta.glob('/public/images/projects/**/*.{png,jpg,jpeg,svg}', {
      eager: true,
      import: 'default'
    });

    const projectImages = Object.keys(modules)
      .filter(path => path.includes(`/projects/${projectFolder}/`))
      .map(path => modules[path]);

    // Fallback if no images found
    if (projectImages.length === 0) {
      return ['/images/projects/default-research.png'];
    }

    return projectImages;
  } catch (error) {
    console.warn(`Could not load images for ${projectFolder}:`, error);
    return ['/images/projects/default-research.png'];
  }
};

export default getProjectImages;