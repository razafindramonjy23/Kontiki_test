import React from 'react';
import { Box, Menu, Button, MenuButton, MenuList, MenuItem, Text } from '@chakra-ui/react'
import { LANGUAGE_VERSIONS } from './constants';

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "blue.400";
const CODE_SNIPPETS = "red-200";
const LangSwitch = ({ language, onSelect }) => {
    return (
        <Box ml={2} mb={4}>
            <Text mb={2} fontSize="lg">
                Langage:
            </Text>

            <Menu isLazy>
                <MenuButton className='border-solid border-2 border-indigo-600 ...' as={Button}>{language}</MenuButton>

                <MenuList bg="#110c1b">
                    {languages.map(([lang, version]) => (
                        <MenuItem key={lang}
                            color={
                                lang === language ? "blue.400" : ""
                            }

                            bg={
                                lang === language ? "gray.700" : "transparent"
                            }

                            _hover={{
                                color: "blue.400",
                                bg:"gray.900"
                            }}

                            onClick={() => onSelect(languages)}>
                            {languages}
                            &nbsp;
                            <Text as="span" color="gray.600" fontSize="small">
                                ({version})
                            </Text>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    )
}

export default LangSwitch
