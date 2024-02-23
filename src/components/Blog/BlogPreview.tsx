import React from "react";
import {
  Dialog,
  Box,
  DialogContent,
  Typography,
  DialogActions,
  Button,
  Chip,
  Stack,
} from "@mui/material";

export interface Props {
  isOpen: boolean;
  content: string;
  title: string;
  description: string;
  tags: string[];
  onClose: any;
  isLoading:boolean;
  onSubmit: any;
}

export default function BlogPreview({
  isOpen,
  content,
  title,
  description,
  onClose,
  tags,
  onSubmit,
  isLoading,
}: Props) {
  const hasContent = title || description || content || tags;
  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      open={isOpen}
      onClose={onClose}
      aria-labelledby="delete-user"
      aria-describedby="alert-dialog-description"
    >
      <DialogActions sx={{ py: 2, px: 3 }}>
        <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
          Preview Post
        </Typography>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          type="submit"
          variant="contained"
          color="success"
          disabled={isLoading}
          // disabled={!isValid}
          // loading={isSubmitting}
          onClick={onSubmit}
        >
          Post
        </Button>
      </DialogActions>

      {hasContent ? (
        <DialogContent>
          <Typography variant="h2" sx={{ mb: 5 }}>
            {title}
          </Typography>

          <Box sx={{ mb: 10 }}>
            <Typography variant="h6" sx={{ mb: 5 }}>
              {description}
            </Typography>

            <div dangerouslySetInnerHTML={{ __html: content }} />

            <Stack direction="row" spacing={1} sx={{ mb: 5 }}>
              {tags?.map((item: any) => (
                <Chip key={item} size="medium" label={item} />
              ))}
            </Stack>
          </Box>
        </DialogContent>
      ) : (
        <>
          <div style={{ height: "90vh" }} className="grid place-items-center">
            Loading....
          </div>
        </>
      )}
    </Dialog>
  );
}
