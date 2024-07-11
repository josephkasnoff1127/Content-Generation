export default [
    {
        name:'Blog Title',
        desc:'An AI tool that generates a creative title based on your blog',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/3131/3131446.png',
        aiPrompt:'Give me five blog topic idea in bullet wise only based on given niche and outline and give me result in rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter your blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Youtube tag generator',
        desc:'An AI tool that generates youtube tags based on the title of your video',
        category:'Tags',
        icon:'https://cdn-icons-png.flaticon.com/128/1383/1383260.png',
        aiPrompt:'Give me 10 youtube tags in bullet wise based on given title give me result in rich text editor format',
        slug:'generate-youtube-tag',
        form:[
            {
                label:'Enter your video title',
                field:'input',
                name:'title',
                required:true
            }

        ]
    },
    {
        name:'Paraphrase your writing',
        desc:'An AI tool that rewords yor writing and makes it grammatically accurate',
        category:'Writing',
        icon:'https://cdn-icons-png.flaticon.com/128/937/937159.png',
        aiPrompt:'Parahrase the given writing, to improve the grammar and writing style',
        slug:'paraphrase-text',
        form:[
            {
                label:'Enter the paragraph you want to improve',
                field:'textarea',
                name:'writing',
                required:true
            }
        ]
    }
]