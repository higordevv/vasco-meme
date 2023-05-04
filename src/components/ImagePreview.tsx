import React, { useState } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

type ImagePreviewProps = {
  previewImage: string | null;
};

function ImagePreview({ previewImage }: ImagePreviewProps) {
  const [view, setView] = useState(false);

  return (
    <>
      <button onClick={() => setView(true)}>View</button>
      <AlertDialog.Root open={view} onClose={() => setView(false)}>
        <AlertDialog.Trigger />
        <AlertDialog.Portal>
          <AlertDialog.Overlay />
          <AlertDialog.Content>
            <AlertDialog.Title>Image Preview</AlertDialog.Title>
            <div className="mt-6 flex-1 px-4 sm:px-6">
              <img
                className="object-contain h-full w-full"
                src={previewImage? previewImage : setView(false)}
                alt="Preview da imagem"
              />
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </>
  );
}

export default ImagePreview;
