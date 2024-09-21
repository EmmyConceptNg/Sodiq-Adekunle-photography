import {
  Box,
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { MenuItems } from "./MenuItems";
import { useNavigate, useLocation } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useSelector } from "react-redux";
import Text from "../../Text";


export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);

  const user = useSelector((state) => state.user.details);

  const handleClick = (_id, link) => {
    setId((prevId) => (_id === prevId ? "" : _id));
    setOpen((prevOpen) => (_id === id ? !prevOpen : true));
    if (_id !== id) {
      navigate(link);
    }
  };

  return (
    <div
      className="myScrollBox"
      style={{ overflowY: "scroll", backgroundColor: "#191919" }}
    >
      <Box>
        <Box display="flex" mt={2} px={2}>
          <Text
            color="#fff"
            fw="400"
            fs="24"
            ff="Sacramento, cursive"
          >
            Sodiq Adekunle photography
          </Text>
        </Box>

        <Box mt={5} sx={{ bgcolor: "#191919" }}>
          {MenuItems.map((item) => {
                const selected = location.pathname.includes(item?.link);
                return (
                  <Box key={item.id}>
                    <ListItemButton
                      sx={{
                        px: 0,
                        backgroundColor:
                          item.link && item?.link?.includes(location.pathname)
                            ? "transparent !important"
                            : "#191919",
                      }}
                      onClick={() => {
                        item?.modal
                          ? setOpenModal(true)
                          : handleClick(item.id, item?.link);
                      }}
                      selected={
                        item.link && item?.link?.includes(location.pathname)
                      }
                    >
                      <ListItemIcon>
                        {selected && (
                          <Box
                            sx={{
                              borderTopRightRadius: "10px",
                              borderBottomRightRadius: "10px",
                            }}
                            bgcolor="#2DDB81"
                            width="6px"
                          />
                        )}
                        <Box ml={2} py={1} my="auto">
                          <Icon
                            style={{
                              fontSize: "25px",
                              color: selected ? "#2DDB81" : "#B7B7B7",
                            }}
                            icon={item.icon}
                          />
                        </Box>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Text
                            fw="550"
                            fs="18px"
                            color={
                              location.pathname.includes(item?.link)
                                ? "#2DDB81"
                                : "#B7B7B7"
                            }
                          >
                            {item.name}
                          </Text>
                        }
                      />
                      {item.group &&
                        (open && id === item.id ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        ))}
                    </ListItemButton>
                    {item.group && (
                      <Collapse
                        in={open && id === item.id}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          {item.group.map((_item, index) => (
                            <ListItemButton
                              key={index}
                              sx={{ pl: 9 }}
                              onClick={() => {
                                navigate(_item?.link);
                              }}
                              selected={location.pathname.includes(_item?.link)}
                            >
                              <ListItemText primary={_item.name} />
                            </ListItemButton>
                          ))}
                        </List>
                      </Collapse>
                    )}
                  </Box>
                );
              })
            }
        </Box>
      </Box>
    </div>
  );
};
