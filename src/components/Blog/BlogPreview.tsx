import React from "react";
import {
  Dialog,
  Box,
  DialogContent,
  Typography,
  DialogActions,
  Button,
} from "@mui/material";

export interface Props {
  isOpen: boolean;
  bodyContent: string;
  title: string;
  description: string;
  onClose: any;
}

export default function BlogPreview({
  isOpen,
  bodyContent,
  title,
  description,
  onClose,
}: Props) {
  const hasContent = title || description || bodyContent;
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
        {/* <LoadingButton
          type="submit"
          variant="contained"
          disabled={!isValid}
          loading={isSubmitting}
          onClick={onSubmit}
        >
          Post
        </LoadingButton> */}
      </DialogActions>

      {hasContent ? (
        <DialogContent>
          <Typography sx={{ mb: 5 }}>{title}</Typography>

          <Box sx={{ mt: 5, mb: 10 }}>
            <Typography sx={{ mb: 5 }}>{description}</Typography>

            <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
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
