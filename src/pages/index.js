import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  TextField,
  Grid,
  CircularProgress,
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
} from "@mui/material";
import axios from 'axios';
// import AboutModal from './about';
import CloseIcon from '@mui/icons-material/Close';
import Footer from "./footer";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { debounce } from 'lodash';


export default function Home() {

  const [dreamDescription, setDreamDescription] = useState("");
  const [interpretation, setInterpretation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [randomImage, setRandomImage] = useState('');
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [dreamDescriptionError, setDreamDescriptionError] = useState("");

   const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  function handleAboutClick() {
    setIsAboutModalOpen(true);
  }

  function handleCloseAboutModal() {
  setIsAboutModalOpen(false);
  }

  const handleInputChange = (event) => {
    setDreamDescription(event.target.value);
    setDreamDescriptionError(""); // clear error message
  };
  

  const handleInterpretClick = async () => {
    try {
      setIsLoading(true);
      const randomNum = Math.floor(Math.random() * 9) + 1;
      setRandomImage(`images/${randomNum}.png`);
    
      if (dreamDescription === "") {
        setDreamDescriptionError("Please describe your dream.");
        setTimeout(() => {
          setDreamDescriptionError("");
        }, 5000); // display error message for 10 seconds
      } else if (dreamDescription.trim().split(" ").length <= 10 ) {
        setDreamDescriptionError("Please describe your dream in more detail so we can find out what it really means.");
        setTimeout(() => {
          setDreamDescriptionError("");
        }, 5000); // display error message for 10 seconds
      } else {
        const response = await axios.post('/api/interpret', { dreamDescription });
        setInterpretation(response.data.interpretation);
        handleResetClick();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  

  const handleResetClick = () => {
    setDreamDescription("");
  };

  useEffect(() => {
    if (interpretation) {
      const audioElement = new Audio('audio/dream.wav');
      audioElement.volume = 0.02;
      audioElement.play();
    }
  }, [interpretation]);
  

  return (
    <>
    <Box   minHeight="100vh">
   <AppBar position="static" sx={{ backgroundColor: '#0F0E17', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)'}}>
      <Toolbar>
        <Typography variant="h5" style={{ flex: 1 }}>
          DreamRevelio <RemoveRedEyeIcon/>
        </Typography>
        <Button color="inherit" onClick={handleAboutClick}>
          About the app
        </Button>
      </Toolbar>
    </AppBar>

  
      <Dialog open={isAboutModalOpen} onClose={handleCloseAboutModal}>
        <DialogTitle>About the app</DialogTitle>
        <DialogContent>
        <Typography variant="body1" paragraph>
          Welcome to our dream interpretation tool! Describe your dreams and get personalized interpretations that uncover hidden meanings and messages in your subconscious mind. Our safe and supportive environment encourages you to explore your dreams with curiosity and wonder. Keep in mind that interpretations are subjective, but our tool is here to provide guidance and support as you explore the fascinating world of your dreams.
        </Typography>
        <Typography variant="body1">
          Contact us: <span style={{fontWeight: 'bold'}}>dreamrevelio@gmail.com</span>
        </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAboutModal}> Close </Button>
        </DialogActions>
      </Dialog>
  
      <Container maxWidth="lg" py={12}>
        <Box maxWidth="md" mx="auto" textAlign="center" mt='50px'>
          <Typography variant="h4" component="h4" gutterBottom color={'#444'}> 
            Reveal the hidden messages in your dreams
          </Typography>
  
          <Box mb={8} mt={4} sx={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'}}>
            <TextField
              id="dreamDescription"
              label="Describe your dream"
              multiline
              fullWidth
              rows={6}
              variant="outlined"
              value={dreamDescription}
              onChange={handleInputChange}
              sx={{
                boxShadow: isFocused ? "0 0 10px 5px '#4FC3D9'" : "none",
                transition: "box-shadow 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.5)"
                }
              }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </Box>
          {dreamDescriptionError && (
              <Typography align="center" color="error" sx={{ marginBottom: '20px' }}>Please describe your dream in more details</Typography>
            )}
          
          {isLoading ? (
            <Box textAlign="center">
              <Typography variant="body1" color="error" gutterBottom>
                Interpreting your dreams...
              </Typography>
              <CircularProgress size={64} />
              <Box display="flex" justifyContent="center">
              <img src={randomImage} alt="Loading" style={{ width: "300px", height: "300px", marginBottom: '10px' }} />
            </Box>
            </Box>
            
          ) : (
            <Box textAlign="center">
              <Button
              sx={{
                backgroundColor: '#2C3E50',
                '&:hover': {
                  backgroundColor: '#2C3F79',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)'
                }}}
                variant="contained"
                size="large"
                onClick={handleInterpretClick}
              >
                Interpret
              </Button>
            </Box>
          )}
{interpretation && (
  <Box
    id="interpretation"
    sx={{
      mt: 8,
      p: 4,
      mb: 4,
      bgcolor: '#292C34 ',
      border: '1px solid #BFBFBF',
      borderRadius: '8px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
      position: 'relative',
    }}
  >
    <audio src="/audio/dream.wav" autoPlay />
    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 4, color: '#FFFF', textAlign: 'center', fontFamily: 'Montserrat' }}>
      Your dream is telling you
    </Typography>
    <Paper
      sx={{
        border: '1px solid #BFBFBF',
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
        p: 4,
        position: 'relative',
        color: '#3C3C3C',
        fontFamily: 'Montserrat',
        fontSize: '1.2rem',
        lineHeight: '1.8',
        textAlign: 'justify',
        textJustify: 'inter-word',
        fontWeight: 500,
      }}
    >
      {interpretation}
      <Button
        sx={{
          position: 'absolute',
          top: '-8.7rem',
          right: '-3.2rem',
          '&:hover': {
            bgcolor: '#D1D5DB',
          },
          borderRadius: '50%',
          p: 1,
        }}
        onClick={() => setInterpretation(null)}
      >
        <CloseIcon sx={{ color: '#3C3C3C' }} />
      </Button>
    </Paper>
  </Box>
)}

        </Box>
      </Container>
    </Box>
    <Footer/>
    </>
  );
}