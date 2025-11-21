const getProjectImages = (projectFolder, priorityImages = []) => {
  try {
    const modules = import.meta.glob('/public/images/projects/**/*.{png,jpg,jpeg,svg}', {
      eager: true,
      import: 'default'
    });

    const allProjectImages = Object.keys(modules)
      .filter(path => path.includes(`/projects/${projectFolder}/`))
      .map(path => modules[path]);

    // If no priority list provided, return all images as-is
    if (priorityImages.length === 0) {
      return allProjectImages.length > 0 ? allProjectImages : ['/images/projects/default-project.png'];
    }

    const orderedImages = [];
    const usedImages = new Set();
    
    // First, add priority images in the specified order
    priorityImages.forEach(priorityImage => {
      const foundImage = allProjectImages.find(imgPath => {
        const fileName = imgPath.split('/').pop().toLowerCase();
        const searchName = priorityImage.toLowerCase();
        return fileName.includes(searchName) || imgPath.toLowerCase().includes(searchName);
      });
      
      if (foundImage && !usedImages.has(foundImage)) {
        orderedImages.push(foundImage);
        usedImages.add(foundImage);
      }
    });

    // Then, add all remaining images that weren't in the priority list
    allProjectImages.forEach(imgPath => {
      if (!usedImages.has(imgPath)) {
        orderedImages.push(imgPath);
      }
    });

    return orderedImages.length > 0 ? orderedImages : ['/images/projects/default-project.png'];
    
  } catch (error) {
    console.warn(`Could not load images for ${projectFolder}:`, error);
    return ['/images/projects/default-project.png'];
  }
};

export default getProjectImages;