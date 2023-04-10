import { useState } from 'react';
import { Typography, Link, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Box } from '@mui/system';

function Footer() {

  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const handleOpenTermsModal = () => {
    setIsTermsModalOpen(true);
  };

  const handleCloseTermsModal = () => {
    setIsTermsModalOpen(false);
  };

  const handleOpenPrivacyModal = () => {
    setIsPrivacyModalOpen(true);
  };

  const handleClosePrivacyModal = () => {
    setIsPrivacyModalOpen(false);
  };

  return (
    <footer style={{ backgroundColor: '#0F0E17', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <Typography variant="caption" align="left" color="white">
      DreamRevelio <RemoveRedEyeIcon fontSize='12px'/>
    </Typography>
    <Typography variant="caption" align="center" color="white">
      <Link href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 16px' }} onClick={handleOpenTermsModal}>Terms of Service</Link> | <Link href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 16px' }} onClick={handleOpenPrivacyModal}>Privacy Policy</Link>
    </Typography>
    <Typography variant="caption" align="right" color="white">
      © All right reserved 2023
    </Typography>
    <Dialog open={isTermsModalOpen} onClose={handleCloseTermsModal}>
      <DialogTitle>Terms of Service</DialogTitle>
      <DialogContent>
      <Typography variant="body1" paragraph margin={'10px'}>
      <Typography>
      1. By using our app, you agree to the following terms and conditions:
      <Typography>
      2. Interpretations are subjective and for entertainment purposes only. Our app uses an AI chatbot powered by GPT to provide interpretations of your dreams. These interpretations are based on algorithms and patterns, and may not accurately reflect the true meaning of your dreams. We do not guarantee the accuracy, completeness, or use of any interpretation provided by our app.
      </Typography>
      <Typography>
      3. Your privacy is important to us. We collect certain personal information from you when you use our app, such as your name and email address. We use this information to personalize your experience and improve our app. We do not share your personal information with third parties without your consent, except as required by law.
        </Typography>
        <Typography>
      4. Our app is intended for users aged 18 and above. If you are under the age of 18, you must obtain parental or guardian consent before using our app.
        </Typography>
        <Typography>
      5. Use of our app is at your own risk. We do not assume any liability for any harm, loss, or damage that may result from your use of our app, including but not limited to errors, omissions, or inaccuracies in the interpretations provided by our app.
        </Typography>
      </Typography>
      </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseTermsModal}>Close</Button>
      </DialogActions>
    </Dialog>
    <Dialog open={isPrivacyModalOpen} onClose={handleClosePrivacyModal}>
      <DialogTitle>Privacy Policy</DialogTitle>
      <Typography variant="body1" paragraph margin={'15px'}>
      Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share your information when you use our app.
      
      <Typography fontWeight={'bold'}>Information We Collect</Typography>
      <Typography>
      When you use our app, we may collect the following types of personal information from you:
      </Typography>
      <Typography>
      * Contact information, such as your name and email address.
      * Usage information, such as your interactions with our app and the interpretations provided by our AI chatbot.
      * Device information, such as your IP address and browser type.
      </Typography>
     
      <Typography fontWeight={'bold'}>How We Use Your Information</Typography>
      <Typography>
      We use your personal information to personalize your experience and improve our app. Specifically, we may use your information for the following purposes:      </Typography>
      <Typography>
      * To provide you with personalized dream interpretations based on your input.
      * To communicate with you about our app, including updates and promotions.
      * To improve our app, including fixing bugs and adding new features.
      </Typography>
      <Typography fontWeight={'bold'}>How We Share Your Information</Typography>
      <Typography>
      We do not share your personal information with third parties without your consent, except as required by law. We may share your information with our service providers who help us operate our app, such as hosting and analytics providers.
      </Typography>
      <Typography fontWeight={'bold'}>Security of Your Information</Typography>
      <Typography>
      We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.     
      </Typography>
      <Typography fontWeight={'bold'}>Changes to This Privacy Policy</Typography>
      <Typography>
      We may update this Privacy Policy from time to time by posting a new version on our app. We encourage you to review this Privacy Policy periodically.    
      </Typography>
      <Typography fontWeight={'bold'}>Contact Us</Typography>
      <Typography>If you have any questions or concerns about this Privacy Policy or our app, please contact us at dreamrevelio@gmail.com.</Typography>
      <Typography>By using our app, you consent to the collection, use, and sharing of your personal information as described in this Privacy Policy. If you do not consent to these practices, please do not use our app.</Typography>
      </Typography>
      <DialogContent>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClosePrivacyModal}>Close</Button>
      </DialogActions>
    </Dialog>
    </footer>
  );
}

export default Footer;