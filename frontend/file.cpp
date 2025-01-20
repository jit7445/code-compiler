#include <iostream>
#include <dirent.h>
#include <string>
#include <cstring>
#include <fstream>
#include <curl/curl.h>

using namespace std;

bool endsWith(const string &fullString, const string &ending) {
    if (fullString.length() >= ending.length()) {
        return (0 == fullString.compare(fullString.length() - ending.length(), ending.length(), ending));
    }
    return false;
}
string readFileContent(const string &filename) {
    ifstream file(filename);
    if (!file) {
        cerr << "Failed to open file: " << filename << endl;
        return "";
    }
    string content((istreambuf_iterator<char>(file)), (istreambuf_iterator<char>()));
    return content;
}
int main() {
    struct dirent *de;
    DIR *dr = opendir(".");
    string IgnoreFileExtension = ".txt"; 
  if (dr == NULL) {
        cout << "Could not open current directory" << endl;
        return 1; 
    }
CURL *curl;
    CURLcode res;
curl_global_init(CURL_GLOBAL_DEFAULT);
    curl = curl_easy_init();
if (curl) {
        curl_easy_setopt(curl, CURLOPT_URL, "http://localhost:4000/"); 

        while ((de = readdir(dr)) != NULL) {
            if (de->d_type == DT_REG) { 
                if (endsWith(de->d_name, IgnoreFileExtension)) {
                    continue; 
                }
                string content = readFileContent(de->d_name);
                if (content.empty()) {
                    cout << "Failed to read file: " << de->d_name << endl;
                    continue;
                }
                cout << "Sending content from file: " << de->d_name << endl;
                cout << content << endl;
                curl_easy_setopt(curl, CURLOPT_POSTFIELDS, content.c_str());
                struct curl_slist *headers = NULL;
                headers = curl_slist_append(headers, "Content-Type: text/plain");
                curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
                res = curl_easy_perform(curl);
                if (res != CURLE_OK) {
                    fprintf(stderr, "curl_easy_perform() failed: %s\n", curl_easy_strerror(res));
                } else {
                    cout << "Uploaded: " << de->d_name << endl;
                }
                curl_slist_free_all(headers);
            }
        }

        curl_easy_cleanup(curl);
    } else {
        cerr << "Failed to initialize cURL" << endl;
    }

    closedir(dr); // Close the directory
    curl_global_cleanup();
    return 0; // Successful execution
}