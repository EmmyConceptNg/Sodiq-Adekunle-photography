import { Box, Modal, Stack, TextField, MenuItem, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Text from "../../Text";
import Button from "../../Button";
import PropTypes from "prop-types";
import axios from "../../../api/axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "ckeditor5/ckeditor5.css";
import { ToastContainer } from "react-toastify";
import {
  DecoupledEditor,
  AccessibilityHelp,
  Alignment,
  Autoformat,
  AutoImage,
  AutoLink,
  Autosave,
  BalloonToolbar,
  BlockQuote,
  Bold,
  Code,
  Essentials,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  Heading,
  Highlight,
  HorizontalLine,
  ImageBlock,
  ImageCaption,
  ImageInline,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  Paragraph,
  RemoveFormat,
  SelectAll,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextTransformation,
  Underline,
  Undo,
} from "ckeditor5";
import { useSelector } from "react-redux";
import { notify } from "../../../utils/Index";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "80vw", xs: "100vw" },
  height: "80vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  p: 4,
};

export default function EditNewsModal({ open, setOpen, post, setPosts }) {
  const editorContainerRef = useRef(null);
  const editorToolbarRef = useRef(null);
  const editorRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const user = useSelector((state) => state.user);

  const [title, setTitle] = useState(post?.title || "");
  const [category, setCategory] = useState(post?.category || "");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState(post?.content || "");

  useEffect(() => {
    setIsLayoutReady(true);

    return () => setIsLayoutReady(false);
  }, []);

  useEffect(() => {
    setTitle(post?.title || "");
    setCategory(post?.category || "");
    setContent(post?.content || "");
    setImage(null);
  }, [post]);

  const editorConfig = {
    toolbar: {
      items: [
        "undo",
        "redo",
        "|",
        "heading",
        "|",
        "fontSize",
        "fontFamily",
        "fontColor",
        "fontBackgroundColor",
        "|",
        "bold",
        "italic",
        "underline",
        "|",
        "link",
        "insertImageViaUrl",
        "insertTable",
        "highlight",
        "blockQuote",
        "|",
        "alignment",
        "|",
        "indent",
        "outdent",
      ],
      shouldNotGroupWhenFull: false,
    },
    plugins: [
      AccessibilityHelp,
      Alignment,
      Autoformat,
      AutoImage,
      AutoLink,
      Autosave,
      BalloonToolbar,
      BlockQuote,
      Bold,
      Code,
      Essentials,
      FindAndReplace,
      FontBackgroundColor,
      FontColor,
      FontFamily,
      FontSize,
      Heading,
      Highlight,
      HorizontalLine,
      ImageBlock,
      ImageCaption,
      ImageInline,
      ImageInsertViaUrl,
      ImageResize,
      ImageStyle,
      ImageTextAlternative,
      ImageToolbar,
      Indent,
      IndentBlock,
      Italic,
      Link,
      LinkImage,
      Paragraph,
      RemoveFormat,
      SelectAll,
      SpecialCharacters,
      SpecialCharactersArrows,
      SpecialCharactersCurrency,
      SpecialCharactersEssentials,
      SpecialCharactersLatin,
      SpecialCharactersMathematical,
      SpecialCharactersText,
      Strikethrough,
      Subscript,
      Superscript,
      Table,
      TableCaption,
      TableCellProperties,
      TableColumnResize,
      TableProperties,
      TableToolbar,
      TextTransformation,
      Underline,
      Undo,
    ],
    balloonToolbar: ["bold", "italic", "|", "link"],
    fontFamily: {
      supportAllValues: true,
    },
    fontSize: {
      options: [10, 12, 14, "default", 18, 20, 22],
      supportAllValues: true,
    },
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4",
        },
        {
          model: "heading5",
          view: "h5",
          title: "Heading 5",
          class: "ck-heading_heading5",
        },
        {
          model: "heading6",
          view: "h6",
          title: "Heading 6",
          class: "ck-heading_heading6",
        },
      ],
    },
    image: {
      toolbar: [
        "toggleImageCaption",
        "imageTextAlternative",
        "|",
        "imageStyle:inline",
        "imageStyle:wrapText",
        "imageStyle:breakText",
        "|",
        "resizeImage",
      ],
    },
    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: "https://",
      decorators: {
        toggleDownloadable: {
          mode: "manual",
          label: "Downloadable",
          attributes: {
            download: "file",
          },
        },
      },
    },
    menuBar: {
      isVisible: true,
    },
    placeholder: "Type or paste your content here!",
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableProperties",
        "tableCellProperties",
      ],
    },
  };

  const handleClose = () => setOpen(false);

  const handleImageChange = (e) => setImage(e.target.files[0]);

  const [creating, setCreating] = useState(false);

  const saveEditing = async (e) => {
    e.preventDefault();
    if (!title || !category || !content) {
      notify('Please fill all input fields', 'error');
      return false;
    }
    setCreating(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      if (image) formData.append("image", image);
      formData.append("content", content);
      formData.append("userId", user?._id);

      const response = await axios
        .put(`/api/blogs/${post._id}/update`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

      setPosts(response.data.blogs);
      setCreating(false);
      handleClose();
      setTimeout(() => {
        notify("News updated successfully", "success");
      }, 1000);
    } catch (error) {
      console.error("Error saving editing:", error);
      setCreating(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title">
        <form onSubmit={saveEditing}>
          <Box sx={style}>
            <Stack spacing={3} sx={{ flexGrow: 1, overflowY: "auto" }}>
              <Typography variant="h6">Edit News</Typography>

              <TextField
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth required
              />

              <TextField
                select
                label="Category"
                variant="outlined"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                fullWidth required
              >
                {["Design", "Product", "Software Engineering", "Customer Success", "Leadership", "Management"].map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                label="Image"
                variant="outlined"
                type="file"
                onChange={handleImageChange}
                InputLabelProps={{ shrink: true }}
                fullWidth required
              />

              <Box flexGrow={1} overflow="auto">
                <div className="main-container" style={{ border: "1px solid #000" }}>
                  <div className="editor-container editor-container_document-editor" ref={editorContainerRef}>
                    <div className="editor-container__toolbar" ref={editorToolbarRef}></div>
                    <div className="editor-container__editor-wrapper">
                      <div className="editor-container__editor">
                        <div ref={editorRef}>
                          {isLayoutReady && (
                            <CKEditor
                              style={{ height: "500px" }}
                              onReady={(editor) => {
                                editorToolbarRef.current.appendChild(
                                  editor.ui.view.toolbar.element
                                );
                              }}
                              onAfterDestroy={() => {
                                Array.from(editorToolbarRef.current.children).forEach((child) => child.remove());
                              }}
                              editor={DecoupledEditor}
                              config={editorConfig}
                              data={content}
                              onChange={(event, editor) => {
                                const data = editor.getData();
                                setContent(data);
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </Stack>

            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button variant="outlined" onClick={handleClose} color="#131C30">
                Cancel
              </Button>
              <Stack spacing={2} direction="row">
                <Button type="submit" variant="contained" loading={creating}>
                  Save
                </Button>
              </Stack>
            </Box>
          </Box>
        </form>
      </Modal>
    </>
  );
}

EditNewsModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  post: PropTypes.object,
  setPosts: PropTypes.func,
};