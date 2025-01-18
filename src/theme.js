import { extendBaseTheme, extendTheme} from '@chakra-ui/react';

const colors = {
   primary: {
  100: "#66A9FF", // Lighter Blue
  200: "#0066CC", // Main Blue (Vibrant Blue)
    600: "#0057B7", // Blue (Medium Blue)
  700: "#004BA1", // Darker Medium Blue
  800: "#004080", 
  900: "#003366", // Dark Blue
},
  secondary: {
    100: "#80E27E", // Lighter Green
    200: "#4CAF50", // Main Green (Fresh Green)
  },
  background: {
    100: "#F8F8F8", // Light Gray
    200: "#E0E0E0", // Slightly Darker Gray
  },
  text: {
    100: "#333333", // Dark Gray
    200: "#555555",// Medium Gray
    300:"#666666"// light Gray
  },
  accent: {
    100: "#FFB74D", // Light Orange
    200: "#FF9800", // Main Orange (Accent Color)
    300: "#F57C00", 
  },
  error: {
    100: "#FF7F7F", // Light Red
    200: "#FF4444", // Main Red (Error Color)
  },
};

const theme = extendTheme({
  colors: colors,
  styles: {
    global: {
      body: {
        backgroundColor: '#F8F8F8', // Light Gray background
        color: '#333333', // Dark Gray text
        fontFamily: 'Inter, sans-serif', // Generic font for consistency
      },
    },
  },
  components: {
    // Button: {
    //   baseStyle: {
    //     color: 'white',
    //     _hover: {
    //       backgroundColor: '#0066CC', // Hover effect with primary blue
    //     },
    //   },
    //   variants: {
    //     solid: {
    //       backgroundColor: '#0066CC', // Button primary color
    //       color: 'white',
    //       _hover: {
    //         backgroundColor: '#004C99', // Darker blue on hover
    //       },
    //     },
    //   },
    // },
    Text: {
      baseStyle: {
        color: '#333333', // Text color
      },
    },
    Heading: {
      baseStyle: {
        color: '#333333', // Heading color
      },
    },
    Link: {
      baseStyle: {
        color: '#0066CC', // Link color
        _hover: {
          color: '#004C99', // Darker blue on hover
        },
      },
    },
    Input: {
      baseStyle: {
        borderColor: '#CCCCCC', // Border color for inputs
      },
    },
    FormLabel: {
      baseStyle: {
        color: '#333333', // Label color
      },
    },
  },
});

export default theme;

// const config = defineConfig({

//   theme: {
//     breakpoints: {
//       sm: "320px",
//       md: "768px",
//       lg: "960px",
//       xl: "1200px",
//     },
//     tokens: {
//       // colors: {
//       //   primary: "#007ACC", // Soft Blue
//       //   secondary: "#F4F4F4", // Light Gray
//       //   accent: "#333333", // Dark Gray
//       //   red: "#EE0F0F", // Red for danger
//       //   gray: {
//       //     100: "#F4F4F4", // Light Gray (backgrounds)
//       //     900: "#333333", // Dark Gray (text)
//       //   },
//       // },
//         colors: {
//         primary: {
//           50: { value: "#E8F0FE" },
//           100: { value: "#C1D8FB" },
//           200: { value: "#9ABFF8" },
//           300: { value: "#73A6F6" },
//           400: { value: "#4C8DF3" },
//           500: { value: "#2674F0" },
//           600: { value: "#2060C3" },
//           700: { value: "#1A4C96" },
//           800: { value: "#13387A" },
//           900: { value: "#0D246D" },
//         },
//         secondary: {
//           50: { value: "#FFF0E6" },
//           100: { value: "#FFDFCC" },
//           200: { value: "#FFCC99" },
//           300: { value: "#FFB366" },
//           400: { value: "#FF9933" },
//           500: { value: "#FF7F00" },
//           600: { value: "#CC6600" },
//           700: { value: "#994D00" },
//           800: { value: "#663300" },
//           900: { value: "#4D2600" },
//         },
//         cta: {
//           50: { value: "#D9F8D9" },
//           100: { value: "#B2F0B2" },
//           200: { value: "#8CE88C" },
//           300: { value: "#66E466" },
//           400: { value: "#33DC33" },
//           500: { value: "#00D000" },
//           600: { value: "#00B300" },
//           700: { value: "#009600" },
//           800: { value: "#007900" },
//           900: { value: "#006300" },
//         },
//       },
//     },
//     semanticTokens: {
//       colors: {
//         danger: { value: "{colors.red}" },
//         text: { value: "{colors.gray.900}" }, // Using Dark Gray for text
//         background: { value: "{colors.gray.100}" }, // Light Gray for background
//       },
//     },
//     keyframes: {
//       spin: {
//         from: { transform: "rotate(0deg)" },
//         to: { transform: "rotate(360deg)" },
//       },
//     },
//   },
// });

// // Exporting system creation with custom theme config
// export const system = createSystem(defaultConfig, config);

