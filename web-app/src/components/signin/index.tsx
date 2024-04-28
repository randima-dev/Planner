import "./index.scss";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

function SignIn(props: any) {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <Box className="signIn">
      <Box textAlign="center">
        <Box>Wedding Manage portal</Box>
        <Box mb="48px">
          <Typography variant="h4" color="primary.main" mb="8px">
            Welcome to the Portal!
          </Typography>
        </Box>
        <Divider flexItem />
        <Stack gap={4} justifyContent="center" alignItems="center" mt="48px">
          <>
            <TextField
              sx={{ maxWidth: "478px" }}
              label="Username"
              variant="outlined"
              type="text"
              fullWidth
              value={email}
            />
            <TextField
              sx={{ maxWidth: "478px" }}
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
            />
          </>

          <Divider flexItem />
          <Button variant="contained" color="secondary">
            Log In
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      signIn: () => {},
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
