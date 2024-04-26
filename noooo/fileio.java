import java.io.File;

class fileio {
    private static Stuff stuff = new Stuff();

    public static void main(String[] args) {
        new File("data/yes.txt").delete();
        while (true) {
            stuff.writeGradient("visual.txt", "|", true);
            stuff.writeGradient("yes.txt", "", false);
        }
    }
}