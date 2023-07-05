import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import AddAlarmIcon from "@mui/icons-material/AddAlarm";
import { WhatsApp } from "@mui/icons-material";
import { red, blue, yellow, pink, green, grey } from "@mui/material/colors";
import TextsmsIcon from "@mui/icons-material/Textsms";

const Profile = () => {
  return (
    <Paper
      elevation={6}
      sx={{
        // backgroundColor:'white',
        height: { sm: "auto", md: "28vh" },
        width: "99%",
        mb: 2,
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          flex: 0.5,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: { xs: "center", sm: "center", md: "flex-start" },
          flexDirection: "column",
          ml: 1,
        }}
      >
        <Typography variant="h5" component="h5" sx={{ mt: 1 }}>
          Krutik Bundela
        </Typography>
        <Typography variant="subtitle1" component="h5" sx={{ mt: 4 }}>
          Phone: 4813115348
        </Typography>
        <Typography variant="subtitle1" component="h5" sx={{ mt: 0.4 }}>
          email:<span style={{ color: "blue" }}> Add email ID</span>
        </Typography>
        <Typography variant="subtitle1" component="h5" sx={{ mt: 0.4 }}>
          No Credit Limit Set:
          <span style={{ color: "blue" }}> ₹ Set Credit Limit</span>
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 0.5,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: { xs: "center", sm: "center", md: "flex-end" },
          flexDirection: "column",
          mr: 1,
          mt: 1,
        }}
      >
        <Box>
          <TextsmsIcon sx={{ color: yellow[600], mr: 1 }} />
          <WhatsApp sx={{ color: green[600], mr: 1 }} />
          <AddAlarmIcon sx={{ color: grey[900] }} />
        </Box>

        <Typography variant="subtitle1" component="h5" sx={{ mt: 4 }}>
          Address: Sanhaula
        </Typography>
        <Typography variant="subtitle1" component="h5" sx={{ mt: 0.4 }}>
          Gstin:<span style={{ color: "blue" }}>Add GST In</span>
        </Typography>
      </Box>
    </Paper>
  );
};

export default Profile;
