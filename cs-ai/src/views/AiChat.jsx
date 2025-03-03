import { Box,Container,Typography } from "@mui/system";
import ChatbotIcon from "../components/chatbot/ChatbotIcon";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const AiChat=()=>{
    return(
        <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <div className="chatbot-popup">
          <div className="chat-header">
            <div className="header-info">
              <ChatbotIcon/>
              <h2 className="logo-text">Chatbot</h2>
            </div>
            <button>
                <KeyboardArrowDownIcon />
                </button>
          </div>

          {/* Chatbot Body */}
          <div className="chat-body">
            <div className="message bot-message">
                <ChatbotIcon></ChatbotIcon>
                <p>Hey There! <br/> How can i Help you today ? </p>
            </div>
            <div className="message user-message">
                <p className="message-text">Lorem ipsum dolor, si</p>
            </div>
          </div>

        {/* Chatbot Footer */}
          <div className="chat-footer">
            <form action="#" className="chat-form">
                <input type="text" placeholder="message" className="message-input" required />
                <button>
                    <KeyboardArrowUpIcon />
                </button>
            </form>
          </div>  
        </div>
      </Box>
    )
}

export default AiChat;