type ImageInfo = {
  url: string;
  name: string;
  path: string;
};

export function getImageInfo(file: File): Promise<ImageInfo> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const url = reader.result as string;
      const name = file.name;
      const path = file.webkitRelativePath || file.name;
      resolve({ url, name, path });
    };
    reader.onerror = reject;
  });
}
