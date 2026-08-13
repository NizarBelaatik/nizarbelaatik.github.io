const getProjectImages = (projectFolder, priorityImages = []) => {
  try {
    const modules = import.meta.glob('/public/images/projects/**/*.{png,jpg,jpeg,svg}', {
      eager: true,
      import: 'default'
    });

    // `path` is the original, unhashed source path (e.g. ".../system-architecture.png") —
    // always safe to match filenames against. `modules[path]` is the resolved URL used for
    // rendering, which in production builds is hashed (e.g. "/assets/system-architecture-D-USI1Ln.png"),
    // so matching against it directly would silently fail to find any priority image.
    const entries = Object.keys(modules)
      .filter(path => path.includes(`/projects/${projectFolder}/`))
      .map(path => ({ fileName: path.split('/').pop().toLowerCase(), url: modules[path] }));

    // If no priority list provided, return all images as-is
    if (priorityImages.length === 0) {
      return entries.length > 0 ? entries.map(e => e.url) : ['/images/projects/default-project.png'];
    }

    const orderedImages = [];
    const usedUrls = new Set();

    // First, add priority images in the specified order
    priorityImages.forEach(priorityImage => {
      const searchName = priorityImage.toLowerCase();
      const found = entries.find(e => e.fileName.includes(searchName));

      if (found && !usedUrls.has(found.url)) {
        orderedImages.push(found.url);
        usedUrls.add(found.url);
      }
    });

    // Then, add all remaining images that weren't in the priority list
    entries.forEach(e => {
      if (!usedUrls.has(e.url)) {
        orderedImages.push(e.url);
        usedUrls.add(e.url);
      }
    });

    return orderedImages.length > 0 ? orderedImages : ['/images/projects/default-project.png'];

  } catch (error) {
    console.warn(`Could not load images for ${projectFolder}:`, error);
    return ['/images/projects/default-project.png'];
  }
};

export default getProjectImages;