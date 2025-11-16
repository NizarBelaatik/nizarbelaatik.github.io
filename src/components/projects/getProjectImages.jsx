const getProjectImages = (projectFolder) => {
  // Glob imports all images under /public/images/projects
  const modules = import.meta.glob('/public/images/projects/**/*.{png,jpg,jpeg,svg}', {
    eager: true, // immediately import so we can use URLs
    import: 'default'
  });

  return Object.keys(modules)
    .filter(path => path.includes(`/projects/${projectFolder}/`))
    .map(path => modules[path]);
};

export default getProjectImages;
